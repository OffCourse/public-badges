import gql from 'graphql-tag';
import * as StencilApollo from 'stencil-apollo';
import { h } from '@stencil/core';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** A field whose value is a generic Globally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  GUID: any,
  ValueCaseId: any,
  /** 
 * A field whose value conforms to the standard internet email address format as
   * specified in RFC822: https://www.w3.org/Protocols/rfc822/.
 */
  EmailAddress: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};


export type ApprovedOrganization = Organization & {
   __typename?: 'ApprovedOrganization',
  organizationId: Scalars['GUID'],
  status: OrganizationStatus,
  name: Scalars['String'],
  contact: Contact,
  admin: Contact,
  domains: Domains,
  approvedBy: Scalars['EmailAddress'],
  approvedOn: Scalars['String'],
};

export type ApprovedPublicBadge = PublicBadge & {
   __typename?: 'ApprovedPublicBadge',
  badgeId: Scalars['GUID'],
  status: Status,
  valueCaseId: Scalars['ID'],
  valueCase: ValueCase,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
  evidence: Array<Maybe<Proof>>,
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

export type Domains = {
   __typename?: 'Domains',
  main: Scalars['String'],
  other?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DomainsInput = {
  main: Scalars['String'],
  other?: Maybe<Array<Maybe<Scalars['String']>>>,
};




export type Mutation = {
   __typename?: 'Mutation',
  proposeValueCase: Scalars['String'],
  registerOrganization?: Maybe<PendingOrganization>,
};


export type MutationProposeValueCaseArgs = {
  input: ValueCaseInput
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
  json: Scalars['JSON'],
  js: OpenBadge,
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
  domains: Domains,
};

export type OrganizationInput = {
  name: Scalars['String'],
  contact: ContactInput,
  admin: ContactInput,
  domains: DomainsInput,
};

export enum OrganizationStatus {
  Requested = 'REQUESTED',
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
  domains: Domains,
};

export type Proof = {
   __typename?: 'Proof',
  proofId: Scalars['GUID'],
  name: Scalars['String'],
  genre: Scalars['String'],
  description: Scalars['String'],
  narrative: Scalars['String'],
};

export type ProposedBy = {
   __typename?: 'ProposedBy',
  organizationId: Scalars['String'],
};

export type PublicBadge = {
  badgeId: Scalars['GUID'],
  status: Status,
  valueCaseId: Scalars['ID'],
  valueCase: ValueCase,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
};

export type Query = {
   __typename?: 'Query',
  getBadge?: Maybe<PublicBadge>,
  getAllBadges?: Maybe<Array<Maybe<PublicBadge>>>,
  getOrganization?: Maybe<Organization>,
  getAllOrganizations?: Maybe<Array<Maybe<Organization>>>,
};


export type QueryGetBadgeArgs = {
  badgeId: Scalars['ID']
};


export type QueryGetOrganizationArgs = {
  organizationId: Scalars['ID']
};

export type RequestedPublicBadge = PublicBadge & {
   __typename?: 'RequestedPublicBadge',
  badgeId: Scalars['GUID'],
  status: Status,
  valueCaseId: Scalars['ID'],
  valueCase: ValueCase,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
};

export type Scenario = {
   __typename?: 'Scenario',
  title: Scalars['String'],
  statements: Array<Maybe<Scalars['String']>>,
};

export type SignedPublicBadge = PublicBadge & {
   __typename?: 'SignedPublicBadge',
  badgeId: Scalars['GUID'],
  status: Status,
  valueCaseId: Scalars['ID'],
  valueCase: ValueCase,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
  evidence: Array<Maybe<Proof>>,
  issuedOn: Scalars['String'],
  expires: Scalars['String'],
  artifact: OpenBadgeArtifact,
};

export enum Status {
  Requested = 'REQUESTED',
  Approved = 'APPROVED',
  Signed = 'SIGNED'
}

export type ValueCase = {
   __typename?: 'ValueCase',
  valueCaseId: Scalars['ValueCaseId'],
  name?: Maybe<Scalars['String']>,
  tags: Array<Maybe<Scalars['String']>>,
  proposedBy: Organization,
  approvedBy: Scalars['String'],
  description: Scalars['String'],
  narrative: Scalars['String'],
  scenarios: Array<Maybe<Scenario>>,
};


export type ValueCaseInput = {
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  narrative: Scalars['String'],
  description: Scalars['String'],
};

export type GetAllBadgesQueryVariables = {};


export type GetAllBadgesQuery = (
  { __typename?: 'Query' }
  & { getAllBadges: Maybe<Array<Maybe<(
    { __typename?: 'ApprovedPublicBadge' }
    & Pick<ApprovedPublicBadge, 'badgeId' | 'tags' | 'description' | 'name' | 'status'>
    & { valueCase: (
      { __typename?: 'ValueCase' }
      & Pick<ValueCase, 'name'>
    ) }
  ) | (
    { __typename?: 'RequestedPublicBadge' }
    & Pick<RequestedPublicBadge, 'badgeId' | 'tags' | 'description' | 'name' | 'status'>
    & { valueCase: (
      { __typename?: 'ValueCase' }
      & Pick<ValueCase, 'name'>
    ) }
  ) | (
    { __typename?: 'SignedPublicBadge' }
    & Pick<SignedPublicBadge, 'badgeId' | 'tags' | 'description' | 'name' | 'status'>
    & { valueCase: (
      { __typename?: 'ValueCase' }
      & Pick<ValueCase, 'name'>
    ) }
  )>>> }
);



export const GetAllBadgesDocument = gql`
    query GetAllBadges {
  getAllBadges {
    badgeId
    tags
    description
    name
    status
    valueCase {
      name
    }
  }
}
    `;

export type GetAllBadgesProps = {
    variables ?: GetAllBadgesQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<GetAllBadgesQuery, GetAllBadgesQueryVariables>;
};
      

export const GetAllBadgesComponent = (props: GetAllBadgesProps, children: [StencilApollo.QueryRenderer<GetAllBadgesQuery, GetAllBadgesQueryVariables>]) => (
  <apollo-query query={ GetAllBadgesDocument } { ...props } renderer={ children[0] } />
);
      