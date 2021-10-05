var express = require('express');
var router = express.Router();
const order = require('../controllers/order.controller');


/* GET home page. */
router.route('/')
.get(order.findAll)
.post(order.create);

router.route('/:orderId')
.get(order.findOne)
.put(order.update)
.delete(order.delete);


  module.exports = router;