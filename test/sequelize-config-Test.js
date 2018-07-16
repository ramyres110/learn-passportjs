const should = require('chai').should();

const shouldPass = require('chai-as-promised').shouldPass;

const sequelize = require('../config/sequelize-config');

describe('Sequelize Connection', function () {
    it('sequelize should authenticate', function () {
        return sequelize.authenticate().should.not.be.rejected;
    });
});
