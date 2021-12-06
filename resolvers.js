const { stuffQuery, stuffMutation } = require('./modules/stuff/resolver');

const resolvers = {
  Query: {
    ...stuffQuery,
  },
  Mutation: {
    ...stuffMutation,
  },
};

module.exports = resolvers;
