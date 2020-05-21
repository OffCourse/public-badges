import createProviderSection from "./providerSection";
import createCustomSection from "./customSection";
import createFunctionSection from "./functionSection";
import createResourcesSection from "./resourcesSection";

import { ExternalConfig } from "../types";
import createResourcesMap from "./resourceConfig";

function createTemplate({
  packageConfig,
  plugins,
  templateTitle,
  customDomain,
  functions,
  ...externalConfig
}: ExternalConfig) {
  const resources = createResourcesMap({
    ...externalConfig,
    functions: Object.entries(functions)
  });
  const config = {
    templateTitle,
    resources,
    customDomain
  };

  return {
    service: templateTitle,
    plugins,
    custom: createCustomSection(config),
    provider: createProviderSection(config),
    package: packageConfig,
    functions: createFunctionSection(config),
    resources: createResourcesSection(config)
  };
}

export {
  createFunctionSection,
  createCustomSection,
  createProviderSection,
  createResourcesSection,
  createTemplate
};
