// Import all required package
// 'path' to access file directory
const path = require('path');
// 'express' to build up server
const express = require('express');
// 'body-parser' to parse body of response
const bodyParser = require('body-parser');

const app = express();

// Initialize templating engine, in this case we use ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Declaring all routing
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

// Let the app to parse response body
app.use(bodyParser.urlencoded({ extended: false }));
// Let the app to automatically go into public folder to use CSS styling
app.use(express.static(path.join(__dirname, 'public')));

// Landing route, using /admin endpoint and requesting 'adminRoutes'
app.use('/admin', adminRoutes);
// shopRoutes to show products
app.use(shopRoutes);

// error route, return error page
app.use(errorController.get404);

app.listen(3000);
