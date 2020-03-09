import { QueryResolvers, Language } from "@types";

const Query: QueryResolvers = {
  async getAllBadges(_root, { domainName, language }, context) {
    const { stores } = context;
    if (`${domainName}` === "https://example.org/") {
      return stores.badgeInstance.fetchAll({});
    }

    const organization = await stores.registry.fetch({ domainName });

    if (!organization) {
      throw "not a known organization for now";
    }

    const organizationId = organization.organizationId;

    context.language = language || Language.En;
    context.organizationName = organization.name;

    return stores.badgeInstance.fetchAll({
      organizationId
    });
  },
  async getValueCase(_root, args, { stores }) {
    const valueCaseId = args.valueCaseId;
    const language = args?.language;
    const valueCase = await stores.valueCase.fetch({ valueCaseId, language });

    if (!valueCase) {
      throw "invalid badge, no corresponding value case";
    }
    return valueCase;
  }
};

export default Query;
