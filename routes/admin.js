const path = require('path');
const express = require('express');

// All controllers using ../controllers/produst.js
// Used to simplify app routing
const productsController = require('../controllers/products');

const router = express.Router();

// '/admin/add-product' => method GET
router.get('/add-product', productsController.getAddProduct);

// ''/admin/add-product' => method POST
router.post('/add-product', productsController.postAddProduct);

// exporting router, so it can be used by another file
module.exports = router;
