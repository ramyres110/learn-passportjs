const should = require('chai').should();
const sequelize = require('../config/sequelize-config');

describe('Sequelize Connection', function () {
    it('sequelize should authenticate', function () {
        sequelize.authenticate()
            .then(() => {
                
            })
            .catch(err => {
                should.exist(err);
            });
    });
});
