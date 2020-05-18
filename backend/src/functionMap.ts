import { PublicBadgesEventType as EV } from "./types/events/eventTypes";
import { PublicBadgesServices as SV } from "./types/services";
import { PublicBadgesResources as RS } from "./types/resources";

export default {
  graphql: {
    variableName: SV.API,
    sources: {
      http: [
        { path: "graphql", methods: ["post", "get"] },
        { path: "playground", methods: ["any"] }
      ]
    },
    resources: [
      RS.REGISTRY_BUCKET,
      RS.REGISTRY_LOOKUP_TABLE,
      RS.ORGANIZATION_STATUS_INDEX
    ]
  },
  [SV.SAVE_ORGANIZATION]: {
    resources: [RS.REGISTRY_BUCKET],
    sources: {
      eventSources: [
        {
          handlerName: SV.API,
          eventTypes: [EV.ORGANIZATION_REGISTRATION_REQUESTED]
        },
        {
          handlerName: SV.APPROVE_ORGANIZATION,
          eventTypes: [EV.ORGANIZATION_APPROVAL_ACCEPTED]
        }
      ]
    }
  },
  [SV.SAVE_BADGE]: {
    resources: [RS.REGISTRY_BUCKET],
    sources: {
      eventSources: [
        {
          handlerName: SV.API,
          eventTypes: [EV.BADGE_ISSUANCE_REQUESTED]
        },
        {
          handlerName: SV.RUN_VALUE_CASE_SCENARIOS,
          eventTypes: [EV.BADGE_ISSUANCE_APPROVED, EV.BADGE_ISSUANCE_REJECTED]
        },
        {
          handlerName: SV.SIGN_OPENBADGE_ARTIFACT,
          eventTypes: [EV.OPEN_BADGES_ARTIFACT_SIGNED]
        }
      ]
    }
  },
  [SV.APPROVE_ORGANIZATION]: {
    sources: {
      eventSources: [
        {
          handlerName: SV.SAVE_ORGANIZATION,
          eventTypes: [EV.ORGANIZATION_APPROVAL_REQUESTED]
        }
      ]
    }
  },
  [SV.PREPARE_OPENBADGE_ARTIFACT]: {
    resources: [RS.REGISTRY_BUCKET],
    sources: {
      eventSources: [
        {
          handlerName: SV.RUN_VALUE_CASE_SCENARIOS,
          eventTypes: [EV.BADGE_ISSUANCE_APPROVED]
        }
      ]
    }
  },
  updateRegistry: {
    resources: [RS.REGISTRY_LOOKUP_TABLE],
    variableName: SV.UPDATE_REGISTRY_LOOKUP,
    sources: {
      eventSources: [
        {
          handlerName: SV.API,
          eventTypes: [EV.ORGANIZATION_REGISTRATION_REQUESTED]
        },
        {
          handlerName: SV.APPROVE_ORGANIZATION,
          eventTypes: [EV.ORGANIZATION_APPROVAL_ACCEPTED]
        }
      ]
    }
  },
  [SV.RUN_VALUE_CASE_SCENARIOS]: {
    resources: [RS.REGISTRY_BUCKET],
    sources: {
      eventSources: [
        {
          handlerName: SV.API,
          eventTypes: [EV.BADGE_ISSUANCE_REQUESTED]
        }
      ]
    }
  },
  [SV.SIGN_OPENBADGE_ARTIFACT]: {
    sources: {
      eventSources: [
        {
          handlerName: SV.PREPARE_OPENBADGE_ARTIFACT,
          eventTypes: [EV.OPEN_BADGES_ARTIFACT_CREATED]
        }
      ]
    }
  },
  [SV.ECHO]: {
    sources: {
      buckets: [RS.REGISTRY_BUCKET],
      eventSources: [
        {
          handlerName: SV.RUN_VALUE_CASE_SCENARIOS,
          eventTypes: [EV.BADGE_ISSUANCE_REJECTED]
        }
      ]
    }
  }
};

