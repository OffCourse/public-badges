import fs from "fs";
import YAML from "yaml";

import { keys } from "ramda";

import {
  createCustomSection,
  createProviderSection,
  createFunctionSection,
  createGeneralConfig
} from "../src/createTemplate";

import * as externalConfig from "../config";

const config = createGeneralConfig(externalConfig);

const file = fs.readFileSync("./__tests__/serverless.yml", "utf8");

const data = YAML.parse(file);

describe("top level", () => {
  test("has all the correct top level entries", () => {
    const expectedEntries = [
      "service",
      "plugins",
      "custom",
      "provider",
      "package",
      "functions",
      "resources"
    ];

    expect(keys(data)).toStrictEqual(expectedEntries);
  });
});

describe("service section", () => {
  test("correct title", () => {
    expect(data.service).toBe(config.templateTitle);
  });
});

describe("plugins section", () => {
  test("correct entries", () => {
    expect(data.plugins).toStrictEqual(config.plugins);
  });
});
describe("package section", () => {
  test("correct entries", () => {
    expect(data.package).toStrictEqual(config.package);
  });
});

describe("custom section", () => {
  test("correct entries", () => {
    expect(data.custom).toStrictEqual(createCustomSection(config));
  });
});

describe("provider section", () => {
  test("correct entries", () => {
    expect(data.provider).toStrictEqual(createProviderSection(config));
  });
});

describe("functions section", () => {
  test("functions handler data", () => {
    expect(data.functions).toEqual(createFunctionSection(config));
  });
});
