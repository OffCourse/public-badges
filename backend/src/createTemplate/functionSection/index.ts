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
  {
    config: { variableName, sources = {}, resources, ...rest }
  }
]: [string, any]): [string, InternalFunctionConfig] {
  const handler = createHandlerLocation(handlerName);
  const events = createEventsEntry(sources);
  const environment = createEnvironmentEntry(
    variableName || handlerName,
    resources
  );
  return [handlerName, { handler, events, environment, ...rest }];
}

function createFunctionSection({
  functions = {}
}: Pick<InternalConfig, "functions">) {
  const rawPairs = toPairs(functions);
  const newPairs = map(createFunctionEntry, rawPairs);
  return fromPairs(newPairs);
}

export default createFunctionSection;
