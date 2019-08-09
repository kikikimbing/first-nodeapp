// Import product model ( define how the entity look like, like creating custom object using class )
const Product = require('../models/product');

// To handle getting add-product page, so we can have the input form
exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

// To handle sending new product record, later after submiting form then redirected to '/' page
exports.postAddProduct = (req, res, next) => {
  // Send new product to product model, so we create new instance here
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);

  // Saving the product after we create the instance
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  products = Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: 'admin/products',
    });
  });
}
