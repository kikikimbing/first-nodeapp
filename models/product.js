// To declare how our object look like

const fs = require('fs');
const path = require('path');

// Global variable for 'p', which is an information about where we save the data
// In this case we store the data under 'data' folder and in 'product.json' file
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'product.json'
);

// To read product list from file that we saved the product.
const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
}

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}
