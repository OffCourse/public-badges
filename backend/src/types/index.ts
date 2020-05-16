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

export type ResourcesMap = Record<ResourceKind, string[]>;

export type ExternalConfig = {
  templateTitle: string;
  packageConfig: any;
  plugins: string[];
  customDomain: any;
  functions: { [key: string]: { variableName?: string } };
} & ResourcesMap;

type Mapping = Record<string, { resourceName: string }>;

export type InternalConfig = Record<"buckets" | "tables", Mapping> & {
  functions: { [key: string]: { variableName?: string } };
  templateTitle: string;
  package: any;
  plugins: string[];
  customDomain: any;
};
