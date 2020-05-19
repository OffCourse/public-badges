import createProviderSection from "./providerSection";
import createCustomSection from "./customSection";
import createGeneralConfig from "./general";
import createFunctionSection from "./functionSection";
import createResourcesSection from "./resourcesSection";

import { ExternalConfig } from "../types";

function createTemplate(externalConfig: ExternalConfig) {
  const config = createGeneralConfig(externalConfig);
  const custom = createCustomSection(config);
  const provider = createProviderSection(config);
  const functions = createFunctionSection(config);
  const resources = createResourcesSection(config);
  return {
    service: config.templateTitle,
    plugins: config.plugins,
    custom,
    provider,
    package: config.package,
    functions,
    resources
  };
}

export {
  createFunctionSection,
  createCustomSection,
  createProviderSection,
  createGeneralConfig,
  createResourcesSection,
  createTemplate
};
