var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require('./config/db.config');
var indexRouter = require('./routes/index');
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// database connexion test
const dbConnexion = async() =>{
  try {
    await database.authenticate();
    console.log('database successfully connected');
  } catch (error) {
     console.error('db Error: ',error);
  }
};

dbConnexion();

app.use('/api', indexRouter);

module.exports = app;
