const Stuff = require('./model');

class StuffService {
  async getAllStuff() {
    const items = await Stuff.find().limit(0).exec();

    const count = await Stuff.countDocuments().exec();

    return {
      items,
      count,
    };
  }

  async getStuffById(id) {
    const foundStuff = await Stuff.findById(id).exec();

    if (!foundStuff) throw new Error('Stuff not found!', 404);

    return foundStuff;
  }

  async getStuffByCategory(category) {
    const items = await Stuff.find({ category: category }).exec();

    const count = await Stuff.countDocuments().exec();

    return {
      items,
      count,
    };
  }

  async addStuff(stuff) {
    return new Stuff(stuff).save();
  }
}

module.exports = new StuffService();
