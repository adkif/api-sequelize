var Sequelize = require('sequelize');
var db = require('../config/db.config');

const cart = db.define('cart', {
    status: {
        type: Sequelize.INTEGER,
    },
    customerId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = cart;