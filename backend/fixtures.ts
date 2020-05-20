export enum TestResources {
  BUCKET = "something_bucket",
  TABLE = "something_table",
  INDEX = "something_index",
  FUNCTION = "something",
  CUSTOM_ENTRY = "something_else"
}

// BUG: Template title should be included
export enum VariableReferences {
  BUCKET = `test-something-\${opt:stage}`,
  TABLE = `something-\${opt:stage}`,
  INDEX = `something-\${opt:stage}`,
  FUNCTION = `test.something-\${opt:stage}`
}

export const baseConfig = { templateTitle: "test" };

export const buckets = {
  [TestResources.BUCKET]: {
    name: TestResources.BUCKET,
    variableReference: VariableReferences.BUCKET
  }
};

export const tables = {
  [TestResources.TABLE]: {
    name: TestResources.TABLE,
    variableReference: VariableReferences.TABLE
  }
};

export const indices = {
  [TestResources.INDEX]: {
    name: TestResources.INDEX,
    variableReference: VariableReferences.INDEX
  }
};

export const functions = {
  [TestResources.FUNCTION]: {
    name: TestResources.FUNCTION,
    variableReference: VariableReferences.FUNCTION
  }
};

export const custom = {
  [TestResources.CUSTOM_ENTRY]: "HI"
};
