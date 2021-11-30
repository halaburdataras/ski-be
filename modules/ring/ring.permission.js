const { allow } = require("graphql-shield");
const ringPermissionsQuery = {
  getAllRings: allow,
  getRingById: allow,
};

const ringPermissionsMutation = {
  addRing: allow,
};

module.exports = { ringPermissionsQuery, ringPermissionsMutation };
