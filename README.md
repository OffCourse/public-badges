PUBLIC BADGES
=============


# Zero Badge

The Zero Badge is a way for organizations that are part of the Public
Spaces coalition to show their affiliation on their website. It provides
visible evidence to the user that the organization has the intention to
implement the Public Spaces values in their online presence.


## Get Involved

### 1. Make sure that your organization meets the criteria for Zero Badge

During this phase of development, it is only possible for the founding
partners of Public Spaces to apply for the Zero Badge.

In a later phase, we will open this project up to other organizations.

If you're organization that is interested in joining the Public Spaces coalition,
please contact us: [contact@public-spaces.org](contact@public-spaces.org).


### 2. Register Organization

When you have embedded the badge in your webpage, you are ready to register the organization.

You can call the api directly, or you can use our [graphql playground](https://api.publicbadges.com/pilot/playground). 
Here you can also find documentation on our graphql schema.


#### Example Request

```bash
curl -X POST 'https://api.publicbadges.com/pilot/graphql'
  -H "Content-Type: application/json"
  -d '{
    "query": "...",
    "variables": "..."
  }'
```

where query is:

```graphql
mutation Register($input: OrganizationInput!){
  registerOrganization(input: $input) {
    domainName
    organizationId
    status
  }
}
``` 

and the variables are:

```json
{
  "input": {
    "name": "offcourse",
    "domainName": "https://offcourse.io",
    "contact": {
      "name": "yeehaa",
      "email": "contact@offcourse.io"
    },
    "admin": {
      "name": "yeehaa",
      "email": "contact@offcourse.io"
    }
  }
}
```

**Example Response**

```json
{
  "organizationId": "e79a6c18-787e-4868-8e65-e6a4530fb419",
  "status": "PENDING"
}
```

An example of a complete curl request can be found here: [./sample-requests/register-organization.sh](./sample-requests/register-organization.sh)


### 3. Apply for the Zero Badge

When you have embedded the badge in your webpage, you are ready to apply for
the zero-badge.

You can call the api directly, or you can use our [graphql playground](https://api.publicbadges.com/pilot/playground)

#### Example Request

```bash
curl -X POST 'https://api.publicbadges.com/pilot/graphql'
  -H "Content-Type: application/json"
  -d '{
    "query": "...",
    "variables": "..."
  }'
```

where query is:

```graphql
mutation($input: PublicBadgeInput!){
  applyForBadge(input: $input){
    badgeId
    status
  }
}
``` 
and the variables are:

```json
{
  "input": {
    "valueCaseId": "88c7a930-3181-11ea-9858-b312ce22102d@zero",
    "domainName": "https://offcourse.io/"
  }
}
```

**Example Response**

```json
{
  "badgeId": "e79a6c18-787e-4868-8e65-e6a4530fb419",
  "status": "PENDING"
}
```

An example of a complete curl request can be found here: [./sample-requests/apply-for-badge.sh](./sample-requests/apply-for-badge.sh)

### 4. Embed the Public Badges Drawer into your webpage

In order to acquire the Zero Badge, you have to include the Public Badges Drawer 
webcomponent on your organization's website.

You can download it from npm:

```bash
npm install @offcourse/public-badges-drawer
yarn add @offcourse/public-badges-drawer
```

```js
import publicbadges-drawer from "@offcourse/public-badges-drawer"
```

or host it directly:

```html
<script src="https://unpkg.com/@offcourse/public-badges-drawer@0.1.0/umd/container.production.min.js" async></script>
```

The Public Spaces Badges drawer is a [webcomponent](https://www.webcomponents.org/introduction)
that you can use directly in your html.

```html
<publicbadges-drawer badge-theme="dark" modal-theme="light" />
```

To configure the badges drawer the following (optional) html attributes are available:

| attribute   | values          | default   |
|-------------|-----------------|-----------|
| badge-color | hex color code  | "#3C3C3C" |
| modal-theme | "dark", "light" | "light"   |
| test-mode   | "true", "false" | "false"   |

##### badge-color
Depending on the background of where the drawer is placed this attribute allows setting it's color.
 
##### modal-theme
Sets the color scheme of the modal (that appears when the drawer is clicked).
 
##### testMode
Puts the badge drawer in test mode, handy for testing the positioning within the website.


Documentation for the use of webcomponents with your frontend framework of choice,
can be found here: [https://stenciljs.com/docs/overview](https://stenciljs.com/docs/overview).


### 5. Wait for Acceptance

Upon submission of your application, we will check if your organization meets the
requirements to get the zero badge. The two main criteria are:

- Your organization is a member of the public spaces coalition.
- Your organization has included the Public Spaces Badge Container on their
website.

The exact scenarios that the we test can be found here: [Zero Badge Feature](/src-feature)

As soon as your organization is verified and the badge is issued, it will appear
in automatically your badge container. You can also download the
[open badge artifact](./src-fixture) manually through the link provided.


## Maintainers

[Jan Hein Hoogstad](https://github.com/yeehaa123): Concept development, system architecture, and backend development

[Alain Otjens](https://github.com/alain0): UI/UX design and frontend development

[Sander van der Waal](https://github.com/sandervdwaal): Community and Project Management and Documentation

Many thanks to Chris Julien, Laurens de Knijff, and Marieke Veling for their
substantial contributions during earlier phases of this project's development.
