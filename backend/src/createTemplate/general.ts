import { ExternalConfig } from "../types";

function createGeneralConfig(config: ExternalConfig) {
  const {
    buckets,
    tables,
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
