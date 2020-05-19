import { map, toPairs, fromPairs, curry } from "ramda";
import { camelCase } from "voca";
import { InternalConfig } from "../types";

import { createVariableReference, createIndexName } from "./helpers";

function createTableResource(
  templateTitle: string,
  [tableName, { config }]: [string, any]
): [string, any] {
  const tableVariable = camelCase(tableName);
  const { GlobalSecondaryIndexes: GSI = [], ...data } = config;
  const GlobalSecondaryIndexes = map(({ IndexName: IN, ...rest }) => {
    const IndexName = createIndexName(templateTitle, IN);
    return { IndexName, ...rest };
  }, GSI);
  return [
    tableVariable,
    {
      Type: "AWS::DynamoDB::Table",
      Properties: {
        TableName: createVariableReference(tableName),
        GlobalSecondaryIndexes,
        ...data
      }
    }
  ];
}

function createResourcesSection({
  tables,
  templateTitle
}: Pick<InternalConfig, "tables" | "templateTitle">) {
  const createTableResourceEntry = curry(createTableResource)(templateTitle);
  const tableResourcePairs = map(createTableResourceEntry, toPairs(tables));
  return { Resources: fromPairs(tableResourcePairs) };
}

export default createResourcesSection;
