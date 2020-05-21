import { map, curry } from "ramda";
import { snakeCase } from "voca";
import {
  InternalResourceEntry,
  ExternalResourceEntry,
  ResourceCategory,
  ResourceType,
  Resources,
  TableConfig,
  FunctionConfig
} from "../types";
import { createVariableReference } from "./helpers";

type InterMediateConfig = [string, TableConfig | FunctionConfig | null];
type InterMediateConfigPair = [ResourceCategory, ExternalResourceEntry[]];
type InternalResources = Record<ResourceCategory, ExternalResourceEntry[]>;

const resourceTypes: Record<ResourceCategory, ResourceType> = {
  buckets: "bucket",
  tables: "table",
  indices: "index",
  functions: "function"
};

function _createConfig(
  resourceCategory: ResourceCategory,
  [name, externalConfig]: InterMediateConfig
): InternalResourceEntry {
  return {
    name,
    resourceType: resourceTypes[resourceCategory],
    variableName: snakeCase(externalConfig?.variableName || name),
    variableReference: createVariableReference(name),
    config: externalConfig
  };
}

function normalizeEntries(entry: ExternalResourceEntry): InterMediateConfig {
  return typeof entry === "string" ? [entry, null] : entry;
}

function createEntry([key, entries]: InterMediateConfigPair): [
  ResourceCategory,
  InternalResourceEntry[]
] {
  const createConfig = curry(_createConfig)(key);
  const normalizedEntries = map(normalizeEntries, entries);
  const newEntries = map(createConfig, normalizedEntries);
  return [key, newEntries];
}

function createResourcesMap(resources: InternalResources): Resources {
  const pairs = Object.entries(resources) as InterMediateConfigPair[];
  const allEntries = map(createEntry, pairs);
  return Object.fromEntries(allEntries);
}

export default createResourcesMap;
