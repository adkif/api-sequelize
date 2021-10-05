var express = require('express');
var router = express.Router();
const customer = require('../controllers/customer.controller');


/* GET home page. */
router.route('/')
.get(customer.findAll)
.post(customer.create);

router.route('/:customerId')
.get(customer.findOne)
.put(customer.update)
.delete(customer.delete);




  
  module.exports = router;