const {
  checkoutQuery,
  checkoutMutation,
} = require('./modules/checkout/checkout.resolver');
const {
  promotionQuery,
  promotionMutation,
} = require('./modules/promotion/promotion.resolver');
const { ringQuery, ringMutation } = require('./modules/ring/ring.resolver');

const resolvers = {
  Query: {
    ...ringQuery,
    ...checkoutQuery,
    ...promotionQuery,
  },
  Mutation: {
    ...ringMutation,
    ...checkoutMutation,
    ...promotionMutation,
  },
};

module.exports = resolvers;
