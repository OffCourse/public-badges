import fs from "fs";
import YAML from "yaml";

import { createTemplate } from "../src/createTemplate";

import * as externalConfig from "../config";

const file = fs.readFileSync("./__tests__/serverless.yml", "utf8");

const data = YAML.parse(file);

const template = createTemplate(externalConfig);

describe("top level", () => {
  test("is identitical to sample template", () => {
    expect(template).toStrictEqual(data);
  });
});

describe("individual sections", () => {
  test("service section", () => {
    expect(template.service).toEqual(data.service);
  });

  test("plugins section", () => {
    expect(template.plugins).toEqual(data.plugins);
  });

  test("custom section", () => {
    expect(template.custom).toEqual(data.custom);
  });

  test("provider section", () => {
    expect(template.provider).toEqual(data.provider);
  });

  test("package section", () => {
    expect(template.package).toEqual(data.package);
  });

  test("functions section", () => {
    expect(template.functions).toEqual(data.functions);
  });

  test("resources section", () => {
    expect(template.resources).toEqual(data.resources);
  });
});
