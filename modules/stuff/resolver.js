const stuffService = require('./service');

const stuffQuery = {
  getAllStuff: async (_) => stuffService.getAllStuff(),
  getStuffById: async (_, { id }) => stuffService.getStuffById(id),
  getStuffByCategory: async (_, { category }) =>
    stuffService.getStuffByCategory(category),
};

const stuffMutation = {
  addStuff: async (_, { stuff }) => stuffService.addStuff(stuff),
};

module.exports = { stuffQuery, stuffMutation };
