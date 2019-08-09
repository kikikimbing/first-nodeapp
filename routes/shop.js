const path = require('path');
const express = require('express');

// All controllers using ../controllers/produst.js
// Used to simplify app routing
const shopController = require('../controllers/shop');

const router = express.Router();

// Returning all recorded product
// 'productsController.getProducts' is a function to get all recorded product
// then show them to page
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);

router.get('/checkout', shopController.getOrders);

// exporting router, so it can be used by another file
module.exports = router;
