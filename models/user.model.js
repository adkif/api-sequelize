var Sequelize = require('sequelize');
var db = require('../config/db.config');

const user = db.define('user', {
    status: {
        type: Sequelize.INTEGER,
    },
    email: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
    type: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: true
    },
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = user;