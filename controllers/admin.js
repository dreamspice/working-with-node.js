const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('admin/add-product', {
    docTitle: 'Add product',
    path: '/admin/add-product',
    activeAdmin: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  // console.log(req.body);
  // products.push({ title: req.body.title });
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, price, description);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render('admin/products', {
      docTitle: 'Admin products',
      prods: products,
      path: 'admin/products',
    });
  });
};
