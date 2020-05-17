import { InternalConfig, ResourceKind } from "../types";
import { curry, reduce } from "ramda";
import { snakeCase, kebabCase } from "voca";

function createBucketName(templateTitle: string, bucketName: string) {
  return `${templateTitle}-${bucketName}-\${opt:stage}`;
}
function createTableName(_templateTitle: string, tableName: string) {
  return `${kebabCase(tableName)}-\${opt:stage}`;
}

function createFunctionName(templateTitle: string, functionName: string) {
  return `${templateTitle}.${kebabCase(functionName)}-\${opt:stage}`;
}

function createFunctionConfig({
  functions,
  templateTitle
}: Pick<InternalConfig, "functions" | "templateTitle">) {
  const blacklist = ["echo", "serveAssets"];
  const entries = Object.entries(functions).filter(
    ([key]) => !blacklist.includes(key)
  );
  return reduce(
    (acc, [key, value]) => {
      const name = value.variableName ? value.variableName : key;
      const keyName = `${snakeCase(name)}`;
      const entry = createFunctionName(templateTitle, keyName);
      return { ...acc, [keyName]: entry };
    },
    {},
    entries
  );
}

const selectResourceCreator: Record<
  ResourceKind,
  (templateTitle: string, bucketName: string) => string
> = {
  buckets: createBucketName,
  tables: createTableName
};

function createResourceConfig(
  resourceKind: ResourceKind,
  config: {
    templateTitle: string;
    resources: { [key: string]: { resourceName: string } };
  }
) {
  /* BUG: this one should also be prefixed with templateTitle */
  const createEntry = curry(selectResourceCreator[resourceKind])(
    config.templateTitle
  );
  return reduce(
    (acc, [key, { resourceName }]) => {
      const entry = createEntry(resourceName);
      return { ...acc, [key]: entry };
    },
    {},
    Object.entries(config.resources)
  );
}

function createCustomSection({
  buckets,
  tables,
  functions,
  templateTitle,
  customDomain
}: InternalConfig) {
  return {
    customDomain,
    ...createResourceConfig("buckets", { resources: buckets, templateTitle }),
    ...createResourceConfig("tables", { resources: tables, templateTitle }),
    ...createFunctionConfig({ functions, templateTitle }),
    "organization-status-index": "organization-status-${opt:stage}"
  };
}

export default createCustomSection;

