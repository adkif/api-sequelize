var Sequelize = require('sequelize');
var db = require('../config/db.config');

const customer = db.define('customer', {
    status: {
        type: Sequelize.INTEGER,
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = customer;