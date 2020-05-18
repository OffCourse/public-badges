import { ExternalConfig } from "../types";

function createGeneralConfig(config: ExternalConfig) {
  const {
    buckets,
    tables,
    tableData,
    functions,
    customDomain,
    packageConfig,
    templateTitle,
    plugins
  } = config;
  return {
    buckets,
    tables,
    tableData,
    functions,
    customDomain,
    package: packageConfig,
    templateTitle,
    plugins
  };
}

export default createGeneralConfig;
