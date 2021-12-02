const mongoose = require('mongoose');

const { DB_COLLECTION_NAMES } = require('../../config/colections-names');

const { PROMOTION, RING } = DB_COLLECTION_NAMES;

const promotionSchema = new mongoose.Schema({
  item: { type: mongoose.Schema.Types.ObjectId, ref: RING },
  promImage: String,
});

module.exports = mongoose.model(PROMOTION, promotionSchema);
