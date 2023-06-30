const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  // console.log('shop.js', products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      docTitle: 'All products',
      prods: products,
      path: '/products',
    });
  });
};

exports.getIndex = (req, res) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      docTitle: 'Shop',
      prods: products,
      path: '/',
    });
  });
};

exports.getCart = (req, res) => {
  res.render('shop/cart', {
    path: 'shop/cart',
    docTitle: 'Your cart',
  });
};

exports.getCheckout = (req, res) => {
  res.render('shop/checkout', {
    path: 'shop/checkout',
    docTitle: 'Checkout',
  });
};
