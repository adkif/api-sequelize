var express = require('express');
var router = express.Router();
const category = require('../controllers/category.controller');


/* GET home page. */
router.route('/')
.get(category.findAll)
.post(category.create);

router.route('/:categoryId')
.get(category.findOne)
.put(category.update)
.delete(category.delete);




  
  module.exports = router;