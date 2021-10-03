var express = require('express');
const product = require('./product.route');
const category = require('./category.route');
const customer = require('./customer.route');
const cart = require('./cart.route');
const order = require('./order.route');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/products', product);
router.use('/categories', category);
router.use('/customers', customer);
router.use('/cart', cart);
router.use('/orders', order);

module.exports = router;
