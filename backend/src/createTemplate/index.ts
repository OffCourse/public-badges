import { map, values, fromPairs, toPairs } from "ramda";
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
  const buckets = fromPairs(
    map(
      buckets => createResourceConfig("bucket", buckets),
      externalConfig.buckets
    )
  );
  const tables = fromPairs(
    map(tables => createResourceConfig("table", tables), externalConfig.tables)
  );
  const indices = fromPairs(
    map(
      indices => createResourceConfig("index", indices),
      externalConfig.indices
    )
  );

  const functions = fromPairs(
    map(fn => createResourceConfig("function", fn), toPairs(f))
  );

  const resources = values({ ...buckets, ...tables, ...indices });
  const custom = createCustomSection({
    buckets,
    resources,
    tables,
    indices,
    functions,
    templateTitle,
    customDomain
  });
  const provider = createProviderSection({ buckets, tables });
  const functionsSection = createFunctionSection({ functions });
  const resourcesSection = createResourcesSection({ templateTitle, tables });
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
