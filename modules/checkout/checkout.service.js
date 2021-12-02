const Checkout = require('./checkout.model');

class CheckoutService {
  async addCheckout(checkout) {
    return new Checkout(checkout).save();
  }

  async getAllCheckouts() {
    const items = await Checkout.find().limit(0).exec();

    const count = await Checkout.countDocuments().exec();

    return {
      items,
      count,
    };
  }
}

module.exports = new CheckoutService();
