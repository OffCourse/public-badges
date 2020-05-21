import { snakeCase, kebabCase } from "voca";
import {
  ExternalResourceEntry,
  InternalResourceEntry,
  ResourceType
} from "../types";

function createBucketName(templateTitle: string, bucketName: string) {
  return `${templateTitle}-${bucketName.replace("_bucket", "")}-\${opt:stage}`;
}

/* BUG: this one should also be prefixed with templateTitle */
function createTableName(_templateTitle: string, tableName: string) {
  return `${kebabCase(tableName.replace("_table", ""))}-\${opt:stage}`;
}

/* BUG: this one should also be prefixed with templateTitle */
function createIndexName(_templateTitle: string, indexName: string) {
  return `${kebabCase(indexName.replace("_index", ""))}-\${opt:stage}`;
}

function createFunctionName(templateTitle: string, functionName: string) {
  return `${templateTitle}.${kebabCase(functionName)}-\${opt:stage}`;
}

function createVariableReference(name: string) {
  return `\${self:custom.${name}}`;
}

function createHandlerLocation(name: string) {
  return `dist/index.${name}`;
}

function createResourceConfig(
  resourceType: ResourceType,
  config: ExternalResourceEntry
): [string, InternalResourceEntry] {
  if (typeof config === "string") {
    return [
      config,
      {
        name: config,
        resourceType,
        variableReference: createVariableReference(config)
      }
    ];
  }
  const [key, { variableName, ...externalConfig }] = config;
  const name = snakeCase(variableName || key);
  return [
    name,
    {
      name,
      resourceType,
      variableName: variableName,
      variableReference: createVariableReference(name),
      config: externalConfig
    }
  ];
}

export {
  createResourceConfig,
  createFunctionName,
  createIndexName,
  createHandlerLocation,
  createTableName,
  createBucketName,
  createVariableReference
};
