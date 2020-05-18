import { PublicBadgesResources as RS } from "./src/types/resources";
import functionMap from "./src/functionMap";
const { graphql, ...rest } = functionMap;
const apiPackageData = {
  individually: true,
  exclude: ["node_modules", "dist/assets"],
  include: [
    "node_modules/apollo-server-lambda/**/*",
    "node_modules/graphql/**/*",
    "node_modules/graphql-import-node/**/*",
    "node_modules/graphql-playground-middleware-lambda/**/*",
    "node_modules/graphql-scalars/**/*",
    "node_modules/graphql-tools/**/*",
    "node_modules/uuid/**/*",
    "node_modules/voca/**/*",
    "node_modules/ramda/**/*"
  ]
};
const functions = { graphql: { package: apiPackageData, ...graphql }, ...rest };

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

const templateTitle = "public-badges";
const plugins = ["serverless-domain-manager"];
const buckets = { [RS.REGISTRY_BUCKET]: {} };
const tables = {
  [RS.REGISTRY_LOOKUP_TABLE]: {
    AttributeDefinitions: [
      {
        AttributeName: "organizationId",
        AttributeType: "S"
      },
      {
        AttributeName: "identityType",
        AttributeType: "S"
      },
      {
        AttributeName: "identityKey",
        AttributeType: "S"
      },
      {
        AttributeName: "approvalStatus",
        AttributeType: "S"
      }
    ],
    KeySchema: [
      {
        AttributeName: "identityKey",
        KeyType: "HASH"
      },
      {
        AttributeName: "identityType",
        KeyType: "RANGE"
      }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1
    },
    GlobalSecondaryIndexes: [
      {
        IndexName: "organization-status-${opt:stage}",
        KeySchema: [
          {
            AttributeName: "approvalStatus",
            KeyType: "HASH"
          },
          {
            AttributeName: "organizationId",
            KeyType: "RANGE"
          }
        ],
        Projection: {
          NonKeyAttributes: [],
          ProjectionType: "KEYS_ONLY"
        },
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1
        }
      }
    ]
  }
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
