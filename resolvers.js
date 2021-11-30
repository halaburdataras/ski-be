const ringService = require("./modules/ring/ring.service");
const { ringQuery, ringMutation } = require("./modules/ring/ring.resolver");

const SCHEMA_NAMES = {
  ring: "Ring",
};

const resolvers = {
  Query: {
    ...ringQuery,
  },
  Mutation: {
    ...ringMutation,
  },
};

module.exports = resolvers;
