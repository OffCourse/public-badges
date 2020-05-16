import { reduce, map } from "ramda";
import { snakeCase } from "voca";
import { InternalConfig } from "../types";

import createProviderSection from "./providerSection";
import createCustomSection from "./customSection";
import createGeneralConfig from "./general";

function createFunctionSection(config: InternalConfig) {
  const functionEntries = Object.entries(config.functions);
  const handlers: { [key: string]: any } = reduce(
    (acc, [key, value]) => {
      const bucketNames = value.sources?.buckets || [];
      const eventsTypes = value.sources?.eventTypes || [];
      const eventSources = value.sources?.functions.map(
        eventSource => `\${self:custom.${snakeCase(eventSource)}}`
      );
      const buckets = map(bucketName => {
        return { s3: `\${self:custom.${bucketName}_bucket}` };
      }, bucketNames);
      const events = [
        ...buckets,
        {
          eventBridge: {
            pattern: {
              "detail-type": eventsTypes,
              source: eventSources
            }
          }
        }
      ];
      const environment = {
        HANDLER_NAME: `${config.templateTitle}.${key}`
      };
      const entry = { handler: `dist/index.${key}`, events, environment };
      return { ...acc, [key]: entry };
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
