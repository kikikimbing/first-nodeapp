// All method written here

// Import product model ( define how the entity look like, like creating custom object using class )
const Product = require('../models/product');

// To handle getting add-product page, so we can have the input form
exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

// To handle sending new product record, later after submiting form then redirected to '/' page
exports.postAddProduct = (req, res, next) => {
  // Send new product title to product model, so we create new instance here
  const product = new Product(req.body.title);
  // Saving the product after we create the instance
  product.save();
  res.redirect('/');
};

// To handle getting all product to be showed
exports.getProducts = (req, res, next) => {
  products = Product.fetchAll(products => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};
