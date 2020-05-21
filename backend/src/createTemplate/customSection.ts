import { fromPairs, values, curry, map } from "ramda";
import { InternalResourceEntry, InternalConfig, ResourceType } from "@types";
import {
  createFunctionName,
  createTableName,
  createIndexName,
  createBucketName
} from "./helpers";

const functionMap: Record<
  ResourceType,
  (templateTitle: string, name: string) => string
> = {
  bucket: createBucketName,
  table: createTableName,
  index: createIndexName,
  function: createFunctionName
};

function _createName(
  templateTitle: string,
  { resourceType, name }: InternalResourceEntry
): [string, string] {
  const fn = functionMap[resourceType];
  return [name, fn(templateTitle, name)];
}

function createCustomSection({
  templateTitle,
  resources: rr,
  ...rest
}: InternalConfig): Record<string, string> {
  const { buckets, tables, indices, functions } = rr;
  const createName = curry(_createName)(templateTitle);
  const resources = values({ ...buckets, ...tables, ...indices, ...functions });
  const r = map(createName, resources);
  return {
    ...fromPairs(r),
    ...rest
  };
}

export default createCustomSection;
