const ringService = require('./ring.service');

const ringQuery = {
  getAllRings: async (_, { limit }) => ringService.getAllRings(limit),
  getRingById: async (_, { id }) => ringService.getRingById(id),
};

const ringMutation = {
  addRing: async (_, { ring }) => ringService.addRing(ring),
};

module.exports = { ringQuery, ringMutation };
