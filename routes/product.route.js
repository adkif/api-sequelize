var express = require('express');
var router = express.Router();
const product = require('../controllers/product.controller');


/* GET home page. */
router.route('/')
.get(product.findAll)
.post(product.create);

router.route('/search')
.get(product.search)

router.route('/:productId')
.get(product.findOne)
.put(product.update)
.delete(product.delete);




  
  module.exports = router;