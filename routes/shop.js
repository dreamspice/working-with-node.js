const express = require('express');
const path = require('path');

const rootDir = require('../helpers/path');

const router = express.Router();

const adminData = require('./admin');
const products = adminData.products;

router.get('/', (req, res, next) => {
  console.log('shop.js', products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render('shop', {
    docTitle: 'Shop',
    prods: products,
    path: '/',
    activeShop: true,
    hasProds: products.length > 0,
  });
});

module.exports = router;
