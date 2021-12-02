const checkoutService = require('./checkout.service');

const checkoutQuery = {
  getAllCheckouts: async (_) => checkoutService.getAllCheckouts(),
};

const checkoutMutation = {
  addCheckout: async (_, { checkout }) => checkoutService.addCheckout(checkout),
};

module.exports = { checkoutQuery, checkoutMutation };
