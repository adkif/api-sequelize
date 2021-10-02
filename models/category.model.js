var Sequelize = require('sequelize');
var db = require('../config/db.config');

const category = db.define('category', {
    status: {
        type: Sequelize.INTEGER,
    },
    nom: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = category;