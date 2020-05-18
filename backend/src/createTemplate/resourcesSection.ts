import { map, toPairs, fromPairs } from "ramda";
import { camelCase } from "voca";
import { InternalConfig } from "../types";

import { createVariableReference } from "./helpers";

function createTableResource([tableName, data]: [string, any]): [string, any] {
  const tableVariable = camelCase(tableName);
  return [
    tableVariable,
    {
      Type: "AWS::DynamoDB::Table",
      Properties: {
        TableName: createVariableReference(tableName),
        ...data
      }
    }
  ];
}

function createResourcesSection({ tables }: InternalConfig) {
  const tableResourcePairs = map(createTableResource, toPairs(tables));
  return { Resources: fromPairs(tableResourcePairs) };
}

export default createResourcesSection;
