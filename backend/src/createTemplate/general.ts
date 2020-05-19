import { ExternalConfig, ExternalResourceEntry } from "../types";
import { map, fromPairs } from "ramda";
import { createVariableReference } from "./helpers";

function createResourceConfig(config: ExternalResourceEntry): [string, any] {
  if (typeof config === "string") {
    return [config, { variableReference: createVariableReference(config) }];
  }
  const [key, externalConfig] = config;
  return [
    key,
    { config: externalConfig, variableReference: createVariableReference(key) }
  ];
}

function createGeneralConfig(config: ExternalConfig) {
  const {
    functions,
    customDomain,
    packageConfig,
    templateTitle,
    plugins
  } = config;
  const buckets = fromPairs(map(createResourceConfig, config.buckets));
  const tables = fromPairs(map(createResourceConfig, config.tables));
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
