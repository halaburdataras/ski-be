const { allow } = require('graphql-shield');

const promotionPermissionsQuery = {
  getAllPromotions: allow,
};

const promotionPermissionsMutation = {
  addPromotion: allow,
};

module.exports = { promotionPermissionsQuery, promotionPermissionsMutation };
