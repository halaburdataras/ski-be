const { shield } = require('graphql-shield');
const {
  ringPermissionsQuery,
  ringPermissionsMutation,
} = require('./modules/ring/ring.permission');

const permissions = shield(
  {
    Query: {
      ...ringPermissionsQuery,
    },
    Mutation: {
      ...ringPermissionsMutation,
    },
  },
  {
    allowExternalErrors: true,
  }
);

module.exports = permissions;
