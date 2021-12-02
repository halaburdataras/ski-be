const { shield } = require('graphql-shield');
const {
  checkoutPermissionsQuery,
  checkoutPermissionsMutation,
} = require('./modules/checkout/checkout.permission');
const {
  promotionPermissionsQuery,
  promotionPermissionsMutation,
} = require('./modules/promotion/promotion.permission');
const {
  ringPermissionsQuery,
  ringPermissionsMutation,
} = require('./modules/ring/ring.permission');

const permissions = shield(
  {
    Query: {
      ...ringPermissionsQuery,
      ...checkoutPermissionsQuery,
      ...promotionPermissionsQuery,
    },
    Mutation: {
      ...ringPermissionsMutation,
      ...checkoutPermissionsMutation,
      ...promotionPermissionsMutation,
    },
  },
  {
    allowExternalErrors: true,
  }
);

module.exports = permissions;
