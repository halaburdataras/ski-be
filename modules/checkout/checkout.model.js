const mongoose = require('mongoose');

const { DB_COLLECTION_NAMES } = require('../../config/colections-names');

const { CHECKOUT, RING } = DB_COLLECTION_NAMES;

const checkoutSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  adress: String,
  adressExtended: String,
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: RING }],
  totalPrice: Number,
});

module.exports = mongoose.model(CHECKOUT, checkoutSchema);
