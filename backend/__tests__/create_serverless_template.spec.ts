import fs from "fs";
import YAML from "yaml";

import { createTemplate } from "../src/createTemplate";

import * as externalConfig from "../config";

const file = fs.readFileSync("./__tests__/serverless.yml", "utf8");

const data = YAML.parse(file);

describe("top level", () => {
  test("is identitical to sample template", () => {
    expect(data).toStrictEqual(createTemplate(externalConfig));
  });
});
