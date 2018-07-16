const Sequelize = require('sequelize');

const sequelize = require('../config/sequelize-config');

const User = sequelize.define('tb_user', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    status: Sequelize.STRING
});

module.exports = User;