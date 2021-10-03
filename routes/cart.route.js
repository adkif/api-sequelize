var express = require('express');
var router = express.Router();
const cart = require('../controllers/cart.controller');


/* GET home page. */
router.route('/')
.get(cart.findAll)
.post(cart.create);

router.route('/:cartId')
.get(cart.findOne)
.put(cart.update)
.delete(cart.delete);




  
  module.exports = router;