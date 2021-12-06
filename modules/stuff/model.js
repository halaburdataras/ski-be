const mongoose = require('mongoose');

const { DB_COLLECTION_NAMES } = require('../../config/colections-names');

const { STUFF } = DB_COLLECTION_NAMES;

const stuffSchema = new mongoose.Schema({
  name: String,
  price: {
    price1: Number,
    price2: Number,
    price3: Number,
    price4: Number,
    priceAdditional: Number,
  },
  description: String,
  photo: String,
  category: String,
});

module.exports = mongoose.model(STUFF, stuffSchema);
