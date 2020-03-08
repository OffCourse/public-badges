import { QueryResolvers } from "@types";

const Query: QueryResolvers = {
  async getAllBadges(_root, args, { stores }) {
    const domainName = args?.domainName;

    if (`${domainName}` === "https://example.org/") {
      return stores.badgeInstance.fetchAll({});
    }

    const organization = await stores.registry.fetch({ domainName });

    if (!organization) {
      throw "not a known organization for now";
    }

    const organizationId = organization.organizationId;

    return stores.badgeInstance.fetchAll({ organizationId });
  },
  async getValueCase(_root, args, { stores }) {
    const valueCaseId = args.valueCaseId;
    const language = args?.language;
    const valueCase = await stores.valueCase.fetch({ valueCaseId });

    if (!valueCase) {
      throw "invalid badge, no corresponding value case";
    }

    if (!language) {
      return valueCase;
    }
    const localization =
      valueCase.localization && valueCase.localization[language];

    if (!localization) {
      throw "this badge is not translated in that language";
    }
    const { name, tags, narrative, scenarios, description } = localization;

    return { ...valueCase, ...localization };
  }
};

export default Query;

