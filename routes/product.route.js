var express = require('express');
var router = express.Router();
const product = require('../controllers/product.controller');
const auth = require('../middlewares/auth.middleware')


/* GET home page. */
router.route('/')
.get(product.findAll)
.post(auth, product.create);

router.route('/search')
.get(product.search)

router.route('/category/:categoryId')
.get(product.findByCategory)

router.route('/:productId')
.get(product.findOne)
.put(auth, product.update)
.delete(auth, product.delete);




  
  module.exports = router;