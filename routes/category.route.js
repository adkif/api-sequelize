var express = require('express');
var router = express.Router();
const category = require('../controllers/category.controller');
const auth = require('../middlewares/auth.middleware')


/* GET home page. */
router.route('/')
.get(category.findAll)
.post(auth, category.create);

router.route('/:categoryId')
.get(category.findOne)
.put(auth, category.update)
.delete(auth, category.delete);




  
  module.exports = router;