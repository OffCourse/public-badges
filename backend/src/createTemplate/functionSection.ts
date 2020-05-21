import { map } from "ramda";
import { upperCase } from "voca";
import {
  HTTPSourceConfig,
  InternalConfig,
  InternalFunctionConfig,
  FunctionConfig,
  InternalResourceEntry,
  EventSourcesConfig,
  EventSourceConfig
} from "../types";

import { createVariableReference, createHandlerLocation } from "./helpers";

function createBucketName(bucketName: string) {
  return { s3: createVariableReference(bucketName) };
}

function createHTTPPath({ path, methods }: HTTPSourceConfig) {
  return map(method => ({ http: { path, method, cors: true } }), methods);
}

function createVariablePair(name: string): [string, string] {
  return [upperCase(name), createVariableReference(name)];
}

function createVariables(resources: string[]) {
  const variablePairs = map(createVariablePair, resources);
  return Object.fromEntries(variablePairs);
}

function createEventBridgeEntry(eventSources: EventSourceConfig[]) {
  return {
    eventBridge: {
      pattern: {
        "detail-type": map(({ eventTypes }) => eventTypes, eventSources).flat(),
        source: map(
          ({ handlerName }) => createVariableReference(handlerName),
          eventSources
        )
      }
    }
  };
}

function createEventsEntry({
  buckets = [],
  http = [],
  eventSources
}: EventSourcesConfig = {}) {
  return [
    ...map(createBucketName, buckets),
    ...map(createHTTPPath, http).flat(),
    eventSources && createEventBridgeEntry(eventSources)
  ].filter(Boolean);
}

function createFunctionEntry({
  name,
  variableName,
  config
}: InternalResourceEntry): [string, InternalFunctionConfig] {
  const {
    sources,
    resources = [],
    variableName: _vn,
    ...rest
  } = config as FunctionConfig;
  return [
    name,
    {
      handler: createHandlerLocation(name),
      events: createEventsEntry(sources),
      environment: {
        HANDLER_NAME: createVariableReference(variableName),
        ...createVariables(resources)
      },
      ...rest
    }
  ];
}

function createFunctionSection({
  resources: { functions = [] }
}: InternalConfig) {
  const entries = map(createFunctionEntry, functions);
  return Object.fromEntries(entries);
}

export default createFunctionSection;
