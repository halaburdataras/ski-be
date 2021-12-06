const { allow } = require('graphql-shield');

const stuffPermissionsQuery = {
  getAllStuff: allow,
  getStuffById: allow,
  getStuffByCategory: allow,
};

const stuffPermissionsMutation = {
  addStuff: allow,
};

module.exports = { stuffPermissionsQuery, stuffPermissionsMutation };
