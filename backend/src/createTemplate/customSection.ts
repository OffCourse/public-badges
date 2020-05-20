import { toPairs, fromPairs, map, curry } from "ramda";
import { snakeCase } from "voca";
import { InternalConfig, ResourceType } from "@types";

import {
  createFunctionName,
  createTableName,
  createIndexName,
  createBucketName
} from "./helpers";

function createFunctionPair(
  templateTitle: string,
  [key, value]: [string, any]
): [string, string] {
  const name = value.variableName ? value.variableName : key;
  const keyName = `${snakeCase(name)}`;
  const entry = createFunctionName(templateTitle, keyName);
  return [keyName, entry];
}

function createFunctionConfig(
  templateTitle: string,
  functions: { [key: string]: { variableName?: string } }
) {
  const createPair = curry(createFunctionPair)(templateTitle);
  const rawPairs = toPairs(functions);
  const newPairs = map(createPair, rawPairs);
  return fromPairs(newPairs);
}
const functionMap: Record<ResourceType, any> = {
  bucket: createBucketName,
  table: createTableName,
  index: createIndexName
};

function createCustomSection({
  functions = {},
  templateTitle,
  tables,
  buckets,
  indices,
  resources,
  ...rest
}: InternalConfig): Record<string, string> {
  console.log(resources);
  const r: [string, string][] = map(({ resourceType, name }) => {
    return [name, functionMap[resourceType](templateTitle, name)];
  }, resources);
  const functionEntries = createFunctionConfig(templateTitle, functions);
  return {
    ...fromPairs(r),
    ...functionEntries,
    ...rest
  };
}

export default createCustomSection;
