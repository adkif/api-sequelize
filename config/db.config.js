var Sequelize =  require('sequelize');
var dotenv = require('dotenv');

dotenv.config();

const database = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    port : process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorAliases : false
});

module.exports =  database;