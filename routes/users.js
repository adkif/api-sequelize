var express = require('express');
var router = express.Router();
var validation = require('../middlewares/user.validation');
var validationkey = require('../middlewares/validatekey');
var user = require('../controllers/user.controller');


router
      .post('/login',validationkey ,validation.login, user.login)
      .post('/register', validation.register,user.register);


module.exports = router;
