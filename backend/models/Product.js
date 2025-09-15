const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  process: String,
  aroma: String,
  amount: String,
  price: Number,
  image: String,
});

const Product =
  mongoose.models.Product || mongoose.model('Product', ProductSchema);

module.exports = Product;
