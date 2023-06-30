const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', {
    docTitle: 'Add product',
    path: '/admin/add-product',
    activeAdmin: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  // console.log(req.body);
  // products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  // console.log('shop.js', products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = Product.fetchAll();
  res.render('shop', {
    docTitle: 'Shop',
    prods: products,
    path: '/',
    activeShop: true,
    hasProds: products.length > 0,
  });
};
