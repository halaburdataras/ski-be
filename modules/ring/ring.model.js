const mongoose = require("mongoose");

const { DB_COLLECTION_NAMES } = require("../../config/colections-names");

const { RING } = DB_COLLECTION_NAMES;

const ringSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  photo: String,
});

module.exports = mongoose.model(RING, ringSchema);
