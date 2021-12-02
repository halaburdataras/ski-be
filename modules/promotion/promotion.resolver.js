const promotionService = require('./promotion.service');

const promotionQuery = {
  getAllPromotions: async (_) => promotionService.getAllPromotions(),
};

const promotionMutation = {
  addPromotion: async (_, { promotion }) =>
    promotionService.addPromotion(promotion),
};

module.exports = { promotionQuery, promotionMutation };
