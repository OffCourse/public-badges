import { map, fromPairs, toPairs } from "ramda";
import createProviderSection from "./providerSection";
import createCustomSection from "./customSection";
import createFunctionSection from "./functionSection";
import createResourcesSection from "./resourcesSection";

import { ExternalConfig, ResourceType } from "../types";
import { createResourceConfig } from "./helpers";

function createInternalResourcesMap(externalConfig: ExternalConfig) {
  const rawResources = {
    bucket: externalConfig.buckets,
    table: externalConfig.tables,
    index: externalConfig.indices,
    function: toPairs(externalConfig.functions)
  };

  const [buckets, tables, indices, functions] = map(([resourceType, value]) => {
    return fromPairs(
      map(r => createResourceConfig(resourceType as ResourceType, r), value)
    );
  }, toPairs(rawResources));

  return { buckets, tables, indices, functions };
}

function createTemplate(externalConfig: ExternalConfig) {
  const {
    packageConfig,
    plugins,
    templateTitle,
    customDomain
  } = externalConfig;
  const resources = createInternalResourcesMap(externalConfig);
  const internalConfig = {
    templateTitle,
    resources,
    customDomain
  };

  const custom = createCustomSection(internalConfig);

  const provider = createProviderSection(internalConfig);
  const functionsSection = createFunctionSection(internalConfig);
  const resourcesSection = createResourcesSection(internalConfig);

  return {
    service: templateTitle,
    plugins,
    custom,
    provider,
    package: packageConfig,
    functions: functionsSection,
    resources: resourcesSection
  };
}

export {
  createFunctionSection,
  createCustomSection,
  createProviderSection,
  createResourcesSection,
  createTemplate
};
