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

// these two should maybe move to other file
export type ResourceKind = "buckets" | "tables";

export type ResourcesMap = Record<ResourceKind, { [key: string]: any }>;

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

export type ExternalConfig = {
  templateTitle: string;
  packageConfig: any;
  plugins: string[];
  customDomain: any;
  functions: Functions;
} & ResourcesMap;

export type InternalConfig = {
  buckets: { [key: string]: any };
  tables: { [key: string]: any };
  functions: Functions;
  templateTitle: string;
  package: any;
  plugins: string[];
  customDomain: any;
};
