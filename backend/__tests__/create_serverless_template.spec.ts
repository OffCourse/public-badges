import fs from "fs";
import YAML from "yaml";

import { createTemplate } from "../src/createTemplate";

import * as externalConfig from "../config";

const file = fs.readFileSync("./__tests__/serverless.yml", "utf8");

const data = YAML.parse(file);

const template = createTemplate(externalConfig);

xdescribe("top level", () => {
  test("is identitical to sample template", () => {
    expect(template).toStrictEqual(data);
  });
});

describe("individual sections", () => {
  xtest("service section", () => {
    expect(template.service).toEqual(data.service);
  });

  xtest("plugins section", () => {
    expect(template.plugins).toEqual(data.plugins);
  });

  test("custom section", () => {
    expect(template.custom).toEqual(data.custom);
  });

  xtest("provider section", () => {
    expect(template.provider).toEqual(data.provider);
  });

  xtest("package section", () => {
    expect(template.package).toEqual(data.package);
  });

  xtest("functions section", () => {
    expect(template.functions).toEqual(data.functions);
  });

  xtest("resources section", () => {
    expect(template.resources).toEqual(data.resources);
  });
});
