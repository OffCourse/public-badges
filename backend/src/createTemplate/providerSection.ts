import { InternalConfig } from "../types";
import { keys, values, map } from "ramda";
import { createVariableReference } from "./helpers";

function createBucketRoleStatement({
  variableReference
}: {
  variableReference: string;
}) {
  const actions = ["ListBucket", "GetObject", "PutObject", "PutObjectAcl"];
  const baseRef = `arn:aws:s3:::${variableReference}`;
  return {
    Effect: "Allow",
    Action: map(action => `s3:${action}`, actions),
    Resource: [baseRef, `${baseRef}/*`]
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
  const tableRef = `arn:aws:dynamodb:\${opt:region, self:provider.region}:*:table/${createVariableReference(
    tableName
  )}`;
  return {
    Effect: "Allow",
    Action: map(action => `dynamodb:${action}`, actions),
    Resource: [tableRef, `${tableRef}/index/*`]
  };
}

function createRoleStatements({
  buckets = {},
  tables = {}
}: Pick<InternalConfig, "buckets" | "tables">) {
  const bucketEntries = map(createBucketRoleStatement, values(buckets));

  const eventEntries = [
    { Effect: "Allow", Action: ["events:PutEvents"], Resource: "*" }
  ];

  const tableEntries = map(createTableRoleStatement, keys(tables) as string[]);

  return [...bucketEntries, ...eventEntries, ...tableEntries];
}

function createProviderSection({
  resources: config
}: Pick<InternalConfig, "resources">) {
  return {
    name: "aws",
    runtime: "nodejs10.x",
    iamRoleStatements: createRoleStatements(config)
  };
}

export default createProviderSection;
