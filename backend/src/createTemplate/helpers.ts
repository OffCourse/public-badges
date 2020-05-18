import { snakeCase, kebabCase } from "voca";

function createBucketName(templateTitle: string, bucketName: string) {
  return `${templateTitle}-${bucketName.replace("_bucket", "")}-\${opt:stage}`;
}

/* BUG: this one should also be prefixed with templateTitle */
function createTableName(_templateTitle: string, tableName: string) {
  return `${kebabCase(tableName.replace("_table", ""))}-\${opt:stage}`;
}

function createFunctionName(templateTitle: string, functionName: string) {
  return `${templateTitle}.${kebabCase(functionName)}-\${opt:stage}`;
}

function createVariableReference(name: string) {
  return `\${self:custom.${snakeCase(name)}}`;
}

function createHandlerLocation(name: string) {
  return `dist/index.${name}`;
}

export {
  createFunctionName,
  createHandlerLocation,
  createTableName,
  createBucketName,
  createVariableReference
};
