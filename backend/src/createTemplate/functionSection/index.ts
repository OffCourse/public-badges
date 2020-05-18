import { fromPairs, toPairs, map } from "ramda";
import {
  InternalConfig,
  ExternalFunctionConfig,
  InternalFunctionConfig
} from "../../types";
import { createHandlerLocation } from "../helpers";

import createEnvironmentEntry from "./environmentEntry";
import createEventsEntry from "./eventsEntry";

function createFunctionEntry([
  handlerName,
  { variableName, sources = {}, resources, ...rest }
]: [string, ExternalFunctionConfig]): [string, InternalFunctionConfig] {
  const handler = createHandlerLocation(handlerName);
  const events = createEventsEntry(sources);
  const environment = createEnvironmentEntry(
    variableName || handlerName,
    resources
  );
  return [handlerName, { handler, events, environment, ...rest }];
}

function createFunctionSection({ functions }: InternalConfig) {
  const rawPairs = toPairs(functions);
  const newPairs = map(createFunctionEntry, rawPairs);
  return fromPairs(newPairs);
}

export default createFunctionSection;
