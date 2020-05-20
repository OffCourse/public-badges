import { Event } from "./models";
export * from "./events";
export * from "./models";
export * from "./resolvers";

export interface Store<O, A, T> {
  fetch: (args: O) => Promise<T>;
  fetchAll: (args: A) => Promise<NonNullable<T>[]>;
}

export type PublicBadgesHandler<T, U> = (event: T) => Promise<U>;

export interface EventBus<E extends Event> {
  put: (event: E) => Promise<E["detail"]>;
}

export type ExternalEventSourceConfig = {
  handlerName: string;
  eventTypes: string[];
};

type ExternalHTTPSourceConfig = {
  path: string;
  methods: string[];
};

export type ExternalEventSourcesConfig = {
  buckets?: string[];
  http?: ExternalHTTPSourceConfig[];
  eventSources?: ExternalEventSourceConfig[];
};

export type ExternalFunctionConfig = {
  variableName?: string;
  sources?: ExternalEventSourcesConfig;
  package?: any;
  resources?: string[];
};

export type InternalFunctionConfig = {
  handler: string;
  events: any[];
  environment: {
    HANDLER_NAME: string;
  };
};

type Functions = {
  [key: string]: ExternalFunctionConfig;
};

export type ExternalTableConfig = {
  AttributeDefinitions: any;
  variableName?: string;
  KeySchema: any;
  ProvisionedThroughput: any;
  GlobalSecondaryIndexes: ExternalIndexConfig[];
};

export type ExternalResourceEntry =
  | string
  | [string, ExternalTableConfig | ExternalFunctionConfig];

export type ResourceType = "table" | "bucket" | "index";

export type InternalResourceEntry = {
  name: string;
  variableName?: string;
  resourceType: ResourceType;
  variableReference: string;
  config?: any;
};

export type ExternalConfig = {
  templateTitle: string;
  packageConfig: any;
  plugins: string[];
  customDomain: any;
  functions: Functions;
  buckets: ExternalResourceEntry[];
  tables: ExternalResourceEntry[];
  indices: ExternalResourceEntry[];
};

type ExternalIndexConfig = {
  IndexName: string;
  KeySchema: any;
  Projection: any;
  ProvisionedThroughput: any;
};

export type InternalConfig = {
  templateTitle: string;
  customDomain?: any;
  buckets?: { [key: string]: InternalResourceEntry };
  resources: InternalResourceEntry[];
  tables?: { [key: string]: InternalResourceEntry };
  functions?: { [key: string]: InternalResourceEntry };
  indices?: { [key: string]: InternalResourceEntry };
};
