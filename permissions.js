const { shield } = require('graphql-shield');

const {
  stuffPermissionsQuery,
  stuffPermissionsMutation,
} = require('./modules/stuff/permission');

const permissions = shield(
  {
    Query: {
      ...stuffPermissionsQuery,
    },
    Mutation: {
      ...stuffPermissionsMutation,
    },
  },
  {
    allowExternalErrors: true,
  }
);

module.exports = permissions;
