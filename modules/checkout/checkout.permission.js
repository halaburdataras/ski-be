const { allow } = require('graphql-shield');

const checkoutPermissionsQuery = {
  getAllCheckouts: allow,
};

const checkoutPermissionsMutation = {
  addCheckout: allow,
};

module.exports = { checkoutPermissionsQuery, checkoutPermissionsMutation };
