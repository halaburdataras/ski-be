const { shield } = require('graphql-shield');
const {
  checkoutPermissionsQuery,
  checkoutPermissionsMutation,
} = require('./modules/checkout/checkout.permission');
const {
  ringPermissionsQuery,
  ringPermissionsMutation,
} = require('./modules/ring/ring.permission');

const permissions = shield(
  {
    Query: {
      ...ringPermissionsQuery,
      ...checkoutPermissionsQuery,
    },
    Mutation: {
      ...ringPermissionsMutation,
      ...checkoutPermissionsMutation,
    },
  },
  {
    allowExternalErrors: true,
  }
);

module.exports = permissions;
