import { reduce } from "ramda";
import { InternalConfig } from "../types";

import createProviderSection from "./providerSection";
import createCustomSection from "./customSection";
import createGeneralConfig from "./general";

function createFunctionSection(config: InternalConfig) {
  const functionEntries = Object.entries(config.functions);
  const handlers: { [key: string]: any } = reduce(
    (acc, [key, _value]) => {
      const config = { handler: `dist/index.${key}` };
      return { ...acc, [key]: config };
    },
    {},
    functionEntries
  );
  return handlers;
}

export {
  createFunctionSection,
  createCustomSection,
  createProviderSection,
  createGeneralConfig
};
