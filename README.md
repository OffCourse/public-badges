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


### 2. Embed the Public Badges Drawer into your webpage

In order to acquire the zero badge, you have to include the Public Spaces Badge
Container webcomponent on your organization's website.

You can download it from npm:

```bash
npm install @public-badges/container
yarn add @public-badges/container
```

```js
import public-badges-drawer from "@public-badges/drawer"
```

or host it directly:

```html
<script src="https://unpkg.com/@public-badges/container@1.0.0/umd/container.production.min.js" async></script>
```

The Public Spaces Badges Container is a [webcomponent](https://www.webcomponents.org/introduction)
that you can use directly in your html.

```html
<PublicBadgesContainer />
```

Documentation for the use of webcomponents with your frontend framework of choice,
can be found here: [https://stenciljs.com/docs/overview](https://stenciljs.com/docs/overview).


### 3. Apply for the Zero Badge

When you have embedded the badge in your webpage, you are ready to apply for
the zero-badge.

You can call the api directly, or you can use a [graphql client](https://graphql.org/code/#graphql-clients)

#### Example Request

```bash
curl -X POST 'https://graphql.publicbadges.com/v1'
  -H "Content-Type: application/json"
  -d '{
    "query": "...",
    "variables": "..."
  }'
```


where query is:

```graphql
mutation($badge: Badge, $organization: Organization){
  applyForBadge(badge: $badge, organization: $organization){
    badge {
      id
      url
      status
    }
    organization {
      id
      url
      status
    }
  }
}
``` 
The entire graphql schema can be [found here](/src-schema)

and the variables are:

```json
{
  "badge": {
    type: "Zero Badge"
  },
  "organization": {
    "name": "Waag",
    "contact": {
      "name": "John Doe",
      "email": "johndoe@waag.org"
    },
    "admin": {
      "name": "John Doer",
      "email": "johndoer@waag.org"
    }
    "domains": [
      "https://www.waag.org"
    ]
  }
```

**Example Response**

```json
{
  "badge": {
    "id": "e79a6c18-787e-4868-8e65-e6a4530fb419",
    "url": "https://public-badges.com/f79a6c18-083f-3852-4e62-e6b4520eb213/e79a6c18-787e-4868-8e65-e6a4530fb419",
    "status": "Pending"
  },
  "organization": {
    "id": "f79a6c18-083f-3852-4e62-e6b4520eb213",
    "url": "https://public-badges.com/f79a6c18-083f-3852-4e62-e6b4520eb213",
    "status": "Pending"
  }
}
```

4. Wait for Acceptance

Upon submission of your application, we will check if your organization meets the
requirements to get the zero badge. The two main criteria are:

- Your organization is a member of the public spaces coalition.
- Your organization has included the Public Spaces Badge Container on their
website.

The exact scenarios that the we test can be found here: [Zero Badge Feature](/src-feature)

As soon as your organization is verified and the badge is issued, it will appear
in automatically your badge container. You can also download the
[open badge artifact](./src-fixture) manually through the link provided.
