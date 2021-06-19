const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
  clientName: String,
  bookName: String,
  bookPrice: Number,
  bookQuantity: Number,
  purchaseTime: String,
});

const Purchase = new mongoose.model("Purchase", purchaseSchema);

module.exports = Purchase;
