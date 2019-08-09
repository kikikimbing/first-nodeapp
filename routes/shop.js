const path = require('path');
const express = require('express');

// All controllers using ../controllers/produst.js
// Used to simplify app routing
const productsController = require('../controllers/products');

const router = express.Router();

// Returning all recorded product
// 'productsController.getProducts' is a function to get all recorded product
// then show them to page
router.get('/', productsController.getProducts);

// exporting router, so it can be used by another file
module.exports = router;
