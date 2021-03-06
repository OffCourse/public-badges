import {
  ScenarioResolvers,
  LocalizationResolvers,
  ValueCaseLocalizationResolvers,
  ValueCaseResolvers
} from "@types";

const Scenario: ScenarioResolvers = {
  description({ description }) {
    return description;
  },
  narrative({ narrative }) {
    return narrative;
  }
};

const ValueCaseLocalization: ValueCaseLocalizationResolvers = {
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
  scenarios({ scenarios }) {
    return scenarios;
  }
};

const Localization: LocalizationResolvers = {
  NL({ NL }) {
    return NL;
  },
  DE({ DE }) {
    return DE;
  }
};

const ValueCase: ValueCaseResolvers = {
  valueCaseId({ valueCaseId }) {
    return valueCaseId;
  },
  name({ name }) {
    return name;
  },
  proposedBy({ proposedBy }, _args, { stores }) {
    return stores.registry.fetch({
      domainName: proposedBy
    });
  },
  image({ image }) {
    return image;
  },
  approvedBy({ approvedBy }) {
    return approvedBy;
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
  localization({ localization }) {
    return localization;
  },
  scenarios({ scenarios }) {
    return scenarios;
  }
};

export { ValueCase, Scenario, Localization, ValueCaseLocalization };

