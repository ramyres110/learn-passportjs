const Sequelize = require('sequelize');

const User = Sequelize.define('tb_user',{
    username: Sequelize.STRING,
    password: Sequelize.STRING
})