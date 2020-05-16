import { ResourceKind, ExternalConfig } from "../types";
import { reduce } from "ramda";
import { slice } from "voca";

function createResourceConfig(
  resourceKind: ResourceKind,
  config: ExternalConfig
) {
  return reduce(
    (acc, resourceName: string) => {
      const key = `${resourceName}_${slice(resourceKind, 0, -1)}`;
      return { ...acc, [key]: { resourceName } };
    },
    {},
    config[resourceKind]
  );
}

function createGeneralConfig(config: ExternalConfig) {
  const buckets = createResourceConfig("buckets", config);
  const tables = createResourceConfig("tables", config);
  const {
    functions,
    customDomain,
    packageConfig,
    templateTitle,
    plugins
  } = config;
  return {
    buckets,
    tables,
    functions,
    customDomain,
    package: packageConfig,
    templateTitle,
    plugins
  };
}

export default createGeneralConfig;
