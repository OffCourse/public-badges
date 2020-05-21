import { curry, map } from "ramda";
import { InternalResourceEntry, InternalConfig, ResourceType } from "@types";

type Transformer = (templateTitle: string, name: string) => string;

import {
  createFunctionName,
  createTableName,
  createIndexName,
  createBucketName
} from "./helpers";

const functionMap: Record<ResourceType, Transformer> = {
  bucket: createBucketName,
  table: createTableName,
  index: createIndexName,
  function: createFunctionName
};

function _createName(
  templateTitle: string,
  { resourceType, variableName }: InternalResourceEntry
): [string, string] {
  const fn = functionMap[resourceType];
  return [variableName, fn(templateTitle, variableName)];
}

function createCustomSection({
  templateTitle,
  resources: rr,
  ...rest
}: InternalConfig): Record<string, string> {
  const createName = curry(_createName)(templateTitle);
  const resources = Object.values(rr).flat();
  const r = map(createName, resources);
  return {
    ...Object.fromEntries(r),
    ...rest
  };
}

export default createCustomSection;
