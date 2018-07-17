const Sequelize = require('sequelize');

const sequelize = require('../config/sequelize-config');

const Routine = sequelize.define('tb_routine', {
    name: Sequelize.STRING,
    description: Sequelize.STRING,
});

module.exports = Routine;