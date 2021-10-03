var express = require('express');
const product = require('./product.route');
const category = require('./category.route');
const customer = require('./customer.route');
const cart = require('./cart.route');
const order = require('./order.route');
const user = require('./users');
var router = express.Router();
const auth = require('../middlewares/auth.middleware')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', user);
router.use('/products',product);
router.use('/categories', category);
router.use('/customers',auth, customer);
router.use('/cart',auth, cart);
router.use('/orders',auth, order);

module.exports = router;
