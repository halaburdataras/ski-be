const Ring = require("./ring.model");

class RingService {
  async getAllRings(limit) {
    const items = await Ring.find().limit(limit).exec();

    if (items.length === 0) throw new Error("Ring not found!", 404);

    const count = await Ring.countDocuments().exec();

    return {
      items,
      count,
    };
  }

  async getRingById(id) {
    const foundRing = await Ring.findById(id).exec();

    if (!foundRing) throw new Error("Ring not found!", 404);

    return foundRing;
  }

  async addRing(ring) {
    return new Ring(ring).save();
  }
}

module.exports = new RingService();
