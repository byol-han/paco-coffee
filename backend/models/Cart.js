const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      productId: String,
      name: String,
      price: Number,
      quantity: { type: Number, default: 1 },
    },
  ],
});

module.exports = mongoose.models.Cart || mongoose.model('Cart', CartSchema);
