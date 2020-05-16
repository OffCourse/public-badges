import { InternalConfig } from "../types";
import { keys, map } from "ramda";

function createBucketRoleStatement(bucketName: string) {
  const actions = ["ListBucket", "GetObject", "PutObject", "PutObjectAcl"];
  return {
    Effect: "Allow",
    Action: map(action => `s3:${action}`, actions),
    Resource: [
      `arn:aws:s3:::\${self:custom.${bucketName}}`,
      `arn:aws:s3:::\${self:custom.${bucketName}}/*`
    ]
  };
}
function createTableRoleStatement(tableName: string) {
  const actions = [
    "Query",
    "Scan",
    "GetItem",
    "PutItem",
    "UpdateItem",
    "DeleteItem"
  ];
  return {
    Effect: "Allow",
    Action: map(action => `dynamodb:${action}`, actions),
    Resource: [
      `arn:aws:dynamodb:\${opt:region, self:provider.region}:*:table/\${self:custom.${tableName}}`,
      `arn:aws:dynamodb:\${opt:region, self:provider.region}:*:table/\${self:custom.${tableName}}/index/*`
    ]
  };
}

function createRoleStatements({ buckets, tables }: InternalConfig) {
  const bucketEntries = map(createBucketRoleStatement, keys(buckets));

  const eventEntries = [
    { Effect: "Allow", Action: ["events:PutEvents"], Resource: "*" }
  ];

  const tableEntries = map(createTableRoleStatement, keys(tables));

  return [...bucketEntries, ...eventEntries, ...tableEntries];
}

function createProviderSection(config: InternalConfig) {
  return {
    name: "aws",
    runtime: "nodejs10.x",
    iamRoleStatements: createRoleStatements(config)
  };
}

export default createProviderSection;
