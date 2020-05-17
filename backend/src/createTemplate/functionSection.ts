import { fromPairs, toPairs, map, curry } from "ramda";
import { snakeCase } from "voca";
import {
  InternalConfig,
  ExternalEventSourcesConfig,
  ExternalEventSourceConfig,
  ExternalFunctionConfig,
  InternalFunctionConfig
} from "../types";

function createHandlerLocation(name: string) {
  return `dist/index.${name}`;
}

function createBucketsSources(bucketNames?: string[]) {
  if (!bucketNames) {
    return [];
  }
  return map(bucketName => {
    return { s3: `\${self:custom.${bucketName}_bucket}` };
  }, bucketNames);
}

function createEventBridgeEntry(eventSources: ExternalEventSourceConfig[]) {
  const detailTypes = map(({ eventType }) => eventType, eventSources);
  const sources = map(
    ({ handlerName }) => `\${self:custom.${snakeCase(handlerName)}}`,
    eventSources
  );
  return {
    eventBridge: {
      pattern: {
        "detail-type": detailTypes,
        source: sources
      }
    }
  };
}

function createEventsData({
  buckets,
  eventSources
}: ExternalEventSourcesConfig) {
  const bucketEntries = buckets ? createBucketsSources(buckets) : [];
  const eventBridgeEntry = eventSources
    ? createEventBridgeEntry(eventSources)
    : null;
  return [...bucketEntries, eventBridgeEntry];
}

function createEnvironmentEntry(templateTitle: string, handlerName: string) {
  return {
    HANDLER_NAME: `${templateTitle}.${handlerName}`
  };
}

function createFunctionEntry(
  templateTitle: string,
  [handlerName, { sources }]: [string, ExternalFunctionConfig]
): [string, InternalFunctionConfig] {
  const handler = createHandlerLocation(handlerName);
  const events = sources ? createEventsData(sources) : [];
  const environment = createEnvironmentEntry(templateTitle, handlerName);
  return [handlerName, { handler, events, environment }];
}

function createFunctionSection({ functions, templateTitle }: InternalConfig) {
  const functionEntries = toPairs(functions);
  const createEntry = curry(createFunctionEntry)(templateTitle);
  const entries = map(createEntry, functionEntries);
  return fromPairs(entries);
}

export default createFunctionSection;
