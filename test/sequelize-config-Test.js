const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const should = chai.should();

const sequelize = require('../config/sequelize-config');

describe('Sequelize Connection', function () {
    it('Sequelize Authentication should be Fulfilled ', function () {
        return sequelize.authenticate().should.be.fulfilled;
    });
    it('Sequelize Authentication should not be Rejected ', function () {
        return sequelize.authenticate().should.be.not.rejected;
    });
});
