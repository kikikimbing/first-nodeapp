const path = require('path');
const express = require('express');

// All controllers using ../controllers/product.js
// Used to simplify app routing
const adminController = require('../controllers/admin');

const router = express.Router();

// '/admin/add-product' => method GET
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

// ''/admin/add-product' => method POST
router.post('/add-product', adminController.postAddProduct);

// exporting router, so it can be used by another file
module.exports = router;
