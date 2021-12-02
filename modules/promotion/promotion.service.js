const Promotion = require('./promotion.model');

class PromotionService {
  async addPromotion(promotion) {
    return new Promotion(promotion).save();
  }

  async getAllPromotions() {
    const items = await Promotion.find().limit(0).exec();

    const count = await Promotion.countDocuments().exec();

    return {
      items,
      count,
    };
  }
}

module.exports = new PromotionService();
