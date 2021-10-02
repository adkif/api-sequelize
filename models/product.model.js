var Sequelize = require('sequelize');
var db = require('../config/db.config');

const product = db.define('product', {
    status: {
        type: Sequelize.INTEGER,
    },
    nom: {
        type: Sequelize.STRING,
        allowNull: true
    },
    prix: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    quanitite: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = product;