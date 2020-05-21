import { map, fromPairs, curry } from "ramda";
import { camelCase } from "voca";
import { InternalConfig } from "../types";

import { createVariableReference, createIndexName } from "./helpers";

function createTableResource(
  templateTitle: string,
  { name, config }: any
): [string, any] {
  const tableVariable = camelCase(name);
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
        TableName: createVariableReference(name),
        GlobalSecondaryIndexes,
        ...data
      }
    }
  ];
}

function createResourcesSection({
  resources: { tables = [] },
  templateTitle
}: Pick<InternalConfig, "resources" | "templateTitle">) {
  const createTableResourceEntry = curry(createTableResource)(templateTitle);
  const tableResourcePairs = map(createTableResourceEntry, tables);
  return { Resources: fromPairs(tableResourcePairs) };
}

export default createResourcesSection;
