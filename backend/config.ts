const templateTitle = "public-badges";

const plugins = ["serverless-domain-manager"];

const REGISTRY_BUCKET = "registry_bucket";
const REGISTRY_LOOKUP_TABLE = "registry_lookup_table";
const UPDATE_REGISTRY_LOOKUP = "updateRegistryLookup";

const buckets = [REGISTRY_BUCKET];

const tables = [REGISTRY_LOOKUP_TABLE];

const RUN_VALUE_CASE_SCENARIOS = "runValueCaseScenarios";
const APPROVE_ORGANIZATION = "approveOrganization";
const API = "api";
const SAVE_ORGANIZATION = "saveOrganization";
const SIGN_OPENBADGE_ARTIFACT = "signOpenBadgeArtifact";

const ORGANIZATION_APPROVAL_ACCEPTED = "ORGANIZATION_APPROVAL_ACCEPTED";
const ORGANIZATION_REGISTRATION_REQUESTED =
  "ORGANIZATION_REGISTRATION_REQUESTED";
const BADGE_ISSUANCE_REQUESTED = "BADGE_ISSUANCE_REQUESTED";
const BADGE_ISSUANCE_REJECTED = "BADGE_ISSUANCE_REJECTED";
const BADGE_ISSUANCE_APPROVED = "BADGE_ISSUANCE_APPROVED";
const OPEN_BADGES_ARTIFACT_SIGNED = "OPEN_BADGES_ARTIFACT_SIGNED";

const functions = {
  graphql: { variableName: API },
  [SAVE_ORGANIZATION]: {
    resources: [REGISTRY_BUCKET],
    sources: {
      eventSources: [
        {
          handlerName: API,
          eventTypes: [ORGANIZATION_REGISTRATION_REQUESTED]
        },
        {
          handlerName: APPROVE_ORGANIZATION,
          eventTypes: [ORGANIZATION_APPROVAL_ACCEPTED]
        }
      ]
    }
  },
  saveBadge: {
    resources: [REGISTRY_BUCKET],
    sources: {
      eventSources: [
        {
          handlerName: API,
          eventTypes: [BADGE_ISSUANCE_REQUESTED]
        },
        {
          handlerName: RUN_VALUE_CASE_SCENARIOS,
          eventTypes: [BADGE_ISSUANCE_APPROVED, BADGE_ISSUANCE_REJECTED]
        },
        {
          handlerName: SIGN_OPENBADGE_ARTIFACT,
          eventTypes: [OPEN_BADGES_ARTIFACT_SIGNED]
        }
      ]
    }
  },
  approveOrganization: {},
  prepareOpenBadgeArtifact: {
    resources: [REGISTRY_BUCKET],
    sources: {
      eventSources: [
        {
          handlerName: RUN_VALUE_CASE_SCENARIOS,
          eventTypes: [BADGE_ISSUANCE_APPROVED]
        }
      ]
    }
  },
  updateRegistry: {
    resources: [REGISTRY_LOOKUP_TABLE],
    variableName: UPDATE_REGISTRY_LOOKUP,
    sources: {
      eventSources: [
        {
          handlerName: API,
          eventTypes: [ORGANIZATION_REGISTRATION_REQUESTED]
        },
        {
          handlerName: APPROVE_ORGANIZATION,
          eventTypes: [ORGANIZATION_APPROVAL_ACCEPTED]
        }
      ]
    }
  },
  [RUN_VALUE_CASE_SCENARIOS]: {
    resources: [REGISTRY_BUCKET],
    sources: {
      eventSources: [
        {
          handlerName: API,
          eventTypes: [BADGE_ISSUANCE_REQUESTED]
        }
      ]
    }
  },
  [SIGN_OPENBADGE_ARTIFACT]: {},
  echo: {
    sources: {
      buckets: [REGISTRY_BUCKET],
      eventSources: [
        {
          handlerName: RUN_VALUE_CASE_SCENARIOS,
          eventTypes: [BADGE_ISSUANCE_REJECTED]
        }
      ]
    }
  }
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

