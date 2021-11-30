const { ringQuery, ringMutation } = require('./modules/ring/ring.resolver');

const resolvers = {
  Query: {
    ...ringQuery,
  },
  Mutation: {
    ...ringMutation,
  },
};

module.exports = resolvers;
