const {
  checkoutQuery,
  checkoutMutation,
} = require('./modules/checkout/checkout.resolver');
const { ringQuery, ringMutation } = require('./modules/ring/ring.resolver');

const resolvers = {
  Query: {
    ...ringQuery,
    ...checkoutQuery,
  },
  Mutation: {
    ...ringMutation,
    ...checkoutMutation,
  },
};

module.exports = resolvers;
