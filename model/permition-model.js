const Sequelize = require('sequelize');

const sequelize = require('../config/sequelize-config');

const Permition = sequelize.define('tb_permition', {
    routine: Sequelize.STRING,
    active: Sequelize.BOOLEAN
});

module.exports = Permition;