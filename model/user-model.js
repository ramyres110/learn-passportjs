const Sequelize = require('sequelize');

const sequelize = require('../config/sequelize-config');

const User = sequelize.define('tb_user', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    status: Sequelize.STRING
});

const Permition = require('./permition-model');
User.hasMany(Permition);

module.exports = User;