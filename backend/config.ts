const templateTitle = "public-badges";

const plugins = [
  "serverless-domain-manager",
  "serverless-aws-static-file-handler/plugins/BinaryMediaTypes"
];

const buckets = ["registry"];

const tables = ["registry_lookup"];

const functions = {
  graphql: { variableName: "api" },
  saveOrganization: {},
  saveBadge: {},
  approveOrganization: {},
  prepareOpenBadgeArtifact: {},
  updateRegistry: { variableName: "updateRegistryLookup" },
  runValueCaseScenarios: {},
  signOpenBadgeArtifact: {},
  echo: {},
  serveAssets: {}
};

const packageConfig = {
  exclude: ["dist/assets", "node_modules"],
  include: [
    "node_modules/voca/**/*",
    "node_modules/uuid/**/*",
    "node_modules/ramda/**/*",
    "node_modules/module-alias/**/*",
    "node_modules/jws/**/*"
  ]
};

const customDomain = {
  domainName: `api.publicbadges.com`,
  stage: "${opt:stage}",
  basePath: "${opt:stage}",
  createRoute53Record: true
};

export {
  templateTitle,
  packageConfig,
  buckets,
  tables,
  functions,
  plugins,
  customDomain
};
