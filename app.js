const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const rootDir = require('./helpers/path');
// const { engine } = require('express-handlebars');

const app = express();

// app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'ejs');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorsController = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorsController.errorPage);

app.listen(3000);
