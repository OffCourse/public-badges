import fs from "fs";
import YAML from "yaml";

import { map, keys, values } from "ramda";

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
  const section = createFunctionSection(config);

  test("correct function entry names", () => {
    const expectedEntries = keys(section).sort();
    const actualEntries = keys(data.functions).sort();
    expect(expectedEntries).toStrictEqual(actualEntries);
  });

  test("correct handler names", () => {
    const getHandlerNames = (functions: any) => {
      const vals = values(functions);
      const names = map(({ handler }) => handler, vals);
      return names.sort();
    };
    expect(getHandlerNames(data.functions)).toEqual(getHandlerNames(section));
  });

  test("echo handler data", () => {
    expect(data.functions.echo).toEqual(section.echo);
  });

  test("runValueCaseScenarios handler data", () => {
    expect(data.functions.runValueCaseScenarios).toEqual(
      section.runValueCaseScenarios
    );
  });

  test("updateRegistry handler data", () => {
    expect(data.functions.updateRegistry).toEqual(section.updateRegistry);
  });

  test("saveOrganization handler data", () => {
    expect(data.functions.saveOrganization).toEqual(section.saveOrganization);
  });
  test("saveBadge handler data", () => {
    expect(data.functions.saveBadge).toEqual(section.saveBadge);
  });
  test("prepareOpenBadgeArtifact handler data", () => {
    expect(data.functions.prepareOpenBadgeArtifact).toEqual(
      section.prepareOpenBadgeArtifact
    );
  });
});
