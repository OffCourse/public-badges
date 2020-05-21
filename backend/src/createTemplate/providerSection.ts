import { InternalConfig, InternalResourceEntry, Resources } from "../types";
import { map } from "ramda";

function createBucketRoleStatement({
  variableReference
}: {
  variableReference: string;
}) {
  const actions = ["ListBucket", "GetObject", "PutObject", "PutObjectAcl"];
  const bucketRef = `arn:aws:s3:::${variableReference}`;
  return {
    Effect: "Allow",
    Action: map(action => `s3:${action}`, actions),
    Resource: [bucketRef, `${bucketRef}/*`]
  };
}
function createTableRoleStatement({
  variableReference
}: InternalResourceEntry) {
  const actions = [
    "Query",
    "Scan",
    "GetItem",
    "PutItem",
    "UpdateItem",
    "DeleteItem"
  ];
  const tableRef = `arn:aws:dynamodb:\${opt:region, self:provider.region}:*:table/${variableReference}`;
  return {
    Effect: "Allow",
    Action: map(action => `dynamodb:${action}`, actions),
    Resource: [tableRef, `${tableRef}/index/*`]
  };
}

function createRoleStatements({ buckets, tables }: Resources) {
  const bucketEntries = map(createBucketRoleStatement, buckets);

  const eventEntries = [
    { Effect: "Allow", Action: ["events:PutEvents"], Resource: "*" }
  ];

  const tableEntries = map(createTableRoleStatement, tables);

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
