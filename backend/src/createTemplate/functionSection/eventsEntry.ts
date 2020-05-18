import { map } from "ramda";
import {
  ExternalEventSourcesConfig,
  ExternalEventSourceConfig
} from "../../types";

import { createVariableReference } from "../helpers";

function createBucketsSources(bucketNames: string[] = []) {
  return map(bucketName => {
    return { s3: createVariableReference(bucketName) };
  }, bucketNames);
}

function createHTTPSources(
  httpEntries: { path: string; methods: string[] }[] = []
) {
  const x = map(({ path, methods }) => {
    return map(method => ({ http: { path, method, cors: true } }), methods);
  }, httpEntries);
  return x.flat();
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
function createEventsEntry({
  buckets,
  http,
  eventSources
}: ExternalEventSourcesConfig) {
  const bucketEntries = createBucketsSources(buckets);
  const httpEntries = createHTTPSources(http);
  const eventBridgeEntry = eventSources
    ? createEventBridgeEntry(eventSources)
    : null;
  const x = [...bucketEntries, ...httpEntries, eventBridgeEntry];
  return x.filter(Boolean);
}

export default createEventsEntry;
