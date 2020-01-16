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
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any,
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
  getBadge?: Maybe<PublicBadge>,
  getAllBadges?: Maybe<Array<Maybe<PublicBadge>>>,
  getOrganization?: Maybe<Organization>,
  getAllOrganizations?: Maybe<Array<Maybe<Organization>>>,
  getValueCase?: Maybe<ValueCase>,
  getAllValueCases?: Maybe<Array<Maybe<ValueCase>>>,
};


export type QueryGetBadgeArgs = {
  badgeId: Scalars['ID']
};


export type QueryGetOrganizationArgs = {
  organizationId?: Maybe<Scalars['ID']>,
  domainName?: Maybe<Scalars['URL']>
};


export type QueryGetAllOrganizationsArgs = {
  filter?: Maybe<OrganizationStatus>
};


export type QueryGetValueCaseArgs = {
  valueCaseId: Scalars['ID']
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
  artifact: Scalars['JSON'],
  recipient: Organization,
};

export enum Status {
  Requested = 'REQUESTED',
  Approved = 'APPROVED',
  Signed = 'SIGNED'
}


export type ValueCase = {
   __typename?: 'ValueCase',
  valueCaseId: Scalars['ValueCaseId'],
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

export type GetAllBadgesQueryVariables = {};


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



export const GetAllBadgesDocument = gql`
    query GetAllBadges {
  getAllBadges {
    badgeId
    name
    description
    status
    ... on SignedPublicBadge {
      evidence {
        proofId
        name
        description
      }
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
      