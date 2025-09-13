const express = require('express');
const {
  getCart,
  addToCart,
  clearCart,
} = require('../controllers/cartController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.get('/', requireAuth, getCart);
router.post('/', requireAuth, addToCart);
router.delete('/', requireAuth, clearCart);

module.exports = router;
