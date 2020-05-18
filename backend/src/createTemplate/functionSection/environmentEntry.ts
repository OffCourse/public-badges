import { upperCase } from "voca";
import { fromPairs, map } from "ramda";
import { createVariableReference } from "../helpers";

function createVariablePair(name: string): [string, string] {
  const key = upperCase(name);
  return [key, createVariableReference(name)];
}

function createEnvironmentEntry(handlerName: string, resources: string[] = []) {
  const variablePairs = map(createVariablePair, resources);
  const variables = fromPairs(variablePairs);
  return {
    HANDLER_NAME: createVariableReference(handlerName),
    ...variables
  };
}

export default createEnvironmentEntry;
