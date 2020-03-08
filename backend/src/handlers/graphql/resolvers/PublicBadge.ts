import {
  PublicBadgeResolvers,
  PublicBadgeStatus,
  PendingPublicBadgeResolvers,
  ApprovedPublicBadgeResolvers,
  RejectedPublicBadgeResolvers,
  SignedPublicBadgeResolvers
} from "@types";

const PublicBadge: PublicBadgeResolvers = {
  __resolveType({ status }) {
    switch (status) {
      case PublicBadgeStatus.Signed: {
        return "SignedPublicBadge";
      }
      case PublicBadgeStatus.Approved: {
        return "ApprovedPublicBadge";
      }
      case PublicBadgeStatus.Rejected: {
        return "RejectedPublicBadge";
      }
      case PublicBadgeStatus.Pending: {
        return "PendingPublicBadge";
      }
    }
  },
  badgeId({ badgeId }) {
    return badgeId;
  },
  valueCaseId({ valueCaseId }) {
    return valueCaseId;
  },
  status({ status }) {
    return status;
  },
  async valueCase({ valueCaseId }, args, { stores }) {
    const language = args?.language;
    const valueCase = await stores.valueCase.fetch({
      valueCaseId: valueCaseId
    });

    if (!valueCase) {
      throw "invalid badge, no corresponding value case";
    }

    if (!language) {
      return valueCase;
    }

    const localization =
      valueCase.localization && valueCase.localization[language];

    if (!localization) {
      throw "this badge is not translated in the language that you requested";
    }
    const { name, tags, narrative, scenarios, description } = localization;

    return { ...valueCase, ...localization };
  },
  name({ name }) {
    return name;
  },
  tags({ tags }) {
    return tags;
  },
  description({ description }) {
    return description;
  },
  narrative({ narrative }) {
    return narrative;
  },
  recipientId({ recipientId }) {
    return recipientId;
  },
  recipient({ recipientId }, _args, { stores }) {
    return stores.registry.fetch({ organizationId: recipientId });
  }
};

const PendingPublicBadge: PendingPublicBadgeResolvers = {
  ...PublicBadge
};

const ApprovedPublicBadge: ApprovedPublicBadgeResolvers = {
  ...PendingPublicBadge,
  evidence({ evidence }) {
    return evidence;
  }
};

const RejectedPublicBadge: RejectedPublicBadgeResolvers = {
  ...ApprovedPublicBadge
};

const SignedPublicBadge: SignedPublicBadgeResolvers = {
  ...ApprovedPublicBadge,
  issuedOn({ issuedOn }) {
    return issuedOn;
  },
  expires({ expires }) {
    return expires;
  },
  artifact({ artifact }) {
    return artifact;
  }
};

export {
  PublicBadge,
  PendingPublicBadge,
  ApprovedPublicBadge,
  RejectedPublicBadge,
  SignedPublicBadge
};
