import { fromPairs, toPairs, map, reduce } from "ramda";
import { snakeCase, upperCase } from "voca";
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

function createVariableReference(name: string) {
  return `\${self:custom.${snakeCase(name)}}`;
}

function createBucketsSources(bucketNames?: string[]) {
  if (!bucketNames) {
    return [];
  }
  return map(bucketName => {
    return { s3: createVariableReference(bucketName) };
  }, bucketNames);
}

function createEventBridgeEntry(eventSources: ExternalEventSourceConfig[]) {
  const detailTypes = map(({ eventTypes }) => eventTypes, eventSources);
  const sources = map(
    ({ handlerName }) => createVariableReference(handlerName),
    eventSources
  );
  return {
    eventBridge: {
      pattern: {
        "detail-type": detailTypes.flat(),
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

function createEnvironmentEntry(handlerName: string, resources?: string[]) {
  const variables = resources
    ? reduce(
        (acc, name) => {
          const key = upperCase(name);
          return { ...acc, [key]: createVariableReference(name) };
        },
        {},
        resources
      )
    : [];
  return {
    HANDLER_NAME: createVariableReference(handlerName),
    ...variables
  };
}

function createFunctionEntry([
  handlerName,
  { variableName, sources, resources }
]: [string, ExternalFunctionConfig]): [string, InternalFunctionConfig] {
  const handler = createHandlerLocation(handlerName);
  const events = sources ? createEventsData(sources) : [];
  const environment = createEnvironmentEntry(
    variableName || handlerName,
    resources
  );
  return [handlerName, { handler, events, environment }];
}

function createFunctionSection({ functions }: InternalConfig) {
  const functionEntries = toPairs(functions);
  const entries = map(createFunctionEntry, functionEntries);
  return fromPairs(entries);
}

export default createFunctionSection;

