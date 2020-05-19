import { map, fromPairs, toPairs } from "ramda";
import createProviderSection from "./providerSection";
import createCustomSection from "./customSection";
import createFunctionSection from "./functionSection";
import createResourcesSection from "./resourcesSection";

import { ExternalConfig } from "../types";
import { createResourceConfig } from "./helpers";

function createTemplate({
  packageConfig,
  plugins,
  functions: f,
  templateTitle,
  customDomain,
  ...externalConfig
}: ExternalConfig) {
  const buckets = fromPairs(map(createResourceConfig, externalConfig.buckets));
  const tables = fromPairs(map(createResourceConfig, externalConfig.tables));
  const functions = fromPairs(map(createResourceConfig, toPairs(f)));
  const custom = createCustomSection({
    buckets,
    tables,
    functions,
    templateTitle,
    customDomain
  });
  const provider = createProviderSection({ buckets, tables });
  const functionsSection = createFunctionSection({ functions });
  const resources = createResourcesSection({ templateTitle, tables });
  return {
    service: templateTitle,
    plugins,
    custom,
    provider,
    package: packageConfig,
    functions: functionsSection,
    resources
  };
}

export {
  createFunctionSection,
  createCustomSection,
  createProviderSection,
  createResourcesSection,
  createTemplate
};
