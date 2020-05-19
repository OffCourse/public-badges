import { toPairs, fromPairs, keys, map, curry } from "ramda";
import { snakeCase } from "voca";
import { InternalConfig } from "@types";

import {
  createFunctionName,
  createTableName,
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

function createResourcePair(
  templateTitle: string,
  resourceKind: string,
  resourceName: string
): [string, string] {
  const createEntry =
    resourceKind === "buckets" ? createBucketName : createTableName;
  return [resourceName, createEntry(templateTitle, resourceName)];
}

function createResourceConfig(
  resourceKind: "buckets" | "tables",
  templateTitle: string,
  resources: string[]
) {
  const createPair = curry(createResourcePair)(templateTitle)(resourceKind);
  const newPairs = map(createPair, resources);
  return fromPairs(newPairs);
}

function createCustomSection({
  buckets,
  tables,
  functions,
  templateTitle,
  customDomain
}: InternalConfig) {
  const bucketEntries = createResourceConfig(
    "buckets",
    templateTitle,
    keys(buckets) as string[]
  );
  const tableEntries = createResourceConfig(
    "tables",
    templateTitle,
    keys(tables) as string[]
  );
  const functionEntries = createFunctionConfig(templateTitle, functions);
  return {
    customDomain,
    ...bucketEntries,
    ...tableEntries,
    ...functionEntries,
    "organization-status-index": "organization-status-${opt:stage}"
  };
}

export default createCustomSection;
