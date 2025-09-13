// models/Cart.js
import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // 로그인된 유저 ID
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
});

export default mongoose.models.Cart || mongoose.model('Cart', CartSchema);
