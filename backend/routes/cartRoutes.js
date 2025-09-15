const express = require('express');
const {
  getCart,
  addToCart,
  clearCart,
} = require('../controllers/cartController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();
const Cart = require('../models/Cart');

router.get('/', requireAuth, getCart);
router.post('/', requireAuth, addToCart);
router.delete('/:productId', requireAuth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(
      (item) => item._id.toString() !== req.params.productId
    );
    await cart.save();

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
