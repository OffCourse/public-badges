export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  URL: any,
  GUID: any,
  EmailAddress: any,
  JSON: any,
};


export type ApprovedOrganization = Organization & {
   __typename?: 'ApprovedOrganization',
  organizationId: Scalars['GUID'],
  status: OrganizationStatus,
  name: Scalars['String'],
  contact: Contact,
  admin: Contact,
  approvedBy: Scalars['EmailAddress'],
  approvedOn: Scalars['String'],
  domainName: Scalars['URL'],
  urls?: Maybe<Array<Maybe<Scalars['URL']>>>,
};

export type ApprovedPublicBadge = PublicBadge & {
   __typename?: 'ApprovedPublicBadge',
  badgeId: Scalars['GUID'],
  status: PublicBadgeStatus,
  valueCaseId: Scalars['ID'],
  valueCase: ValueCase,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
  evidence: Array<Proof>,
  recipient: Organization,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Contact = {
   __typename?: 'Contact',
  name: Scalars['String'],
  email: Scalars['EmailAddress'],
};

export type ContactInput = {
  name: Scalars['String'],
  email: Scalars['EmailAddress'],
};



export type Issuer = {
   __typename?: 'Issuer',
  issuerId: Scalars['URL'],
  type?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  email: Scalars['EmailAddress'],
};


export type Mutation = {
   __typename?: 'Mutation',
  applyForBadge?: Maybe<PublicBadge>,
  registerOrganization?: Maybe<PendingOrganization>,
};


export type MutationApplyForBadgeArgs = {
  input: PublicBadgeInput
};


export type MutationRegisterOrganizationArgs = {
  input: OrganizationInput
};

export type OpenBadge = {
   __typename?: 'OpenBadge',
  id: Scalars['String'],
  badge: OpenBadgeClass,
  recipient: OpenBadgeRecipient,
  issuedOn: Scalars['String'],
  expires: Scalars['String'],
  evidence: Array<Maybe<OpenBadgeProof>>,
};

export type OpenBadgeArtifact = {
   __typename?: 'OpenBadgeArtifact',
  signature: Scalars['String'],
  json: Scalars['JSON'],
};

export type OpenBadgeClass = {
   __typename?: 'OpenBadgeClass',
  id: Scalars['String'],
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  criteria: OpenBadgeCriteria,
};

export type OpenBadgeCriteria = {
   __typename?: 'OpenBadgeCriteria',
  narrative: Scalars['String'],
};

export type OpenBadgeProof = {
   __typename?: 'OpenBadgeProof',
  id: Scalars['String'],
  name: Scalars['String'],
  genre: Scalars['String'],
  description: Scalars['String'],
  narrative: Scalars['String'],
};

export type OpenBadgeRecipient = {
   __typename?: 'OpenBadgeRecipient',
  identity: Scalars['String'],
  type: Scalars['String'],
};

export type Organization = {
  organizationId: Scalars['GUID'],
  status: OrganizationStatus,
  name: Scalars['String'],
  contact: Contact,
  admin: Contact,
  domainName: Scalars['URL'],
  urls?: Maybe<Array<Maybe<Scalars['URL']>>>,
};

export type OrganizationInput = {
  name: Scalars['String'],
  contact: ContactInput,
  admin: ContactInput,
  domainName: Scalars['URL'],
};

export enum OrganizationStatus {
  Pending = 'PENDING',
  Approved = 'APPROVED'
}

export type PendingOrganization = Organization & {
   __typename?: 'PendingOrganization',
  organizationId: Scalars['GUID'],
  status: OrganizationStatus,
  name: Scalars['String'],
  contact: Contact,
  admin: Contact,
  domainName: Scalars['URL'],
  urls?: Maybe<Array<Maybe<Scalars['URL']>>>,
};

export type PendingPublicBadge = PublicBadge & {
   __typename?: 'PendingPublicBadge',
  badgeId: Scalars['GUID'],
  status: PublicBadgeStatus,
  valueCaseId: Scalars['ID'],
  valueCase: ValueCase,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
  recipient: Organization,
};

export type Proof = {
   __typename?: 'Proof',
  proofId: Scalars['GUID'],
  name: Scalars['String'],
  genre: Scalars['String'],
  description: Scalars['String'],
  narrative: Array<Scalars['String']>,
};

export type PublicBadge = {
  badgeId: Scalars['GUID'],
  status: PublicBadgeStatus,
  valueCaseId: Scalars['ID'],
  valueCase: ValueCase,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
  recipient: Organization,
};

export type PublicBadgeInput = {
  valueCaseId: Scalars['ID'],
  domainName: Scalars['URL'],
};

export enum PublicBadgeStatus {
  Pending = 'PENDING',
  Approved = 'APPROVED',
  Signed = 'SIGNED',
  Rejected = 'REJECTED'
}

export type Query = {
   __typename?: 'Query',
  getAllBadges?: Maybe<Array<Maybe<PublicBadge>>>,
};


export type QueryGetAllBadgesArgs = {
  domainName: Scalars['URL']
};

export type RejectedPublicBadge = PublicBadge & {
   __typename?: 'RejectedPublicBadge',
  badgeId: Scalars['GUID'],
  status: PublicBadgeStatus,
  valueCaseId: Scalars['ID'],
  valueCase: ValueCase,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
  evidence: Array<Proof>,
  recipient: Organization,
};

export type Scenario = {
   __typename?: 'Scenario',
  description: Scalars['String'],
  narrative: Array<Scalars['String']>,
};

export type SignedPublicBadge = PublicBadge & {
   __typename?: 'SignedPublicBadge',
  badgeId: Scalars['GUID'],
  status: PublicBadgeStatus,
  valueCaseId: Scalars['ID'],
  valueCase: ValueCase,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
  evidence: Array<Proof>,
  issuedOn: Scalars['String'],
  expires: Scalars['String'],
  artifact: OpenBadgeArtifact,
  recipient: Organization,
};


export type ValueCase = {
   __typename?: 'ValueCase',
  valueCaseId: Scalars['GUID'],
  image: Scalars['URL'],
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  proposedBy: Organization,
  approvedBy: Scalars['String'],
  description: Scalars['String'],
  narrative: Scalars['String'],
  scenarios: Array<Scenario>,
};

export type ValueCaseInput = {
  domainName: Scalars['URL'],
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  narrative: Scalars['String'],
  description: Scalars['String'],
};

export type GetAllBadgesQueryVariables = {
  domainName: Scalars['URL']
};


export type GetAllBadgesQuery = (
  { __typename?: 'Query' }
  & { getAllBadges: Maybe<Array<Maybe<(
    { __typename?: 'ApprovedPublicBadge' }
    & Pick<ApprovedPublicBadge, 'badgeId' | 'name' | 'description' | 'status'>
  ) | (
    { __typename?: 'PendingPublicBadge' }
    & Pick<PendingPublicBadge, 'badgeId' | 'name' | 'description' | 'status'>
  ) | (
    { __typename?: 'RejectedPublicBadge' }
    & Pick<RejectedPublicBadge, 'badgeId' | 'name' | 'description' | 'status'>
  ) | (
    { __typename?: 'SignedPublicBadge' }
    & Pick<SignedPublicBadge, 'badgeId' | 'name' | 'description' | 'status'>
    & { evidence: Array<(
      { __typename?: 'Proof' }
      & Pick<Proof, 'proofId' | 'name' | 'description'>
    )> }
  )>>> }
);
