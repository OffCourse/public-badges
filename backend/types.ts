export type ResourceKind = "buckets" | "tables";

export type ResourcesMap = Record<ResourceKind, string[]>;

export type Config = {
  templateTitle: string;
  customDomain: any;
  functions: { [key: string]: { variableName?: string; buckets?: string[] } };
} & ResourcesMap;
