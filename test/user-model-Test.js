const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const should = chai.should();

const User = require('../model/user-model');

describe('User Model', function () {
    it('User find all return should be an Array', function () {
        return User.findAll()
            .then((data) => {
                return data.should.be.a('array');
            })
            .catch((err) => {
                throw err;
            })
    });
    it('User create return should have an id propertie', function () {
        let user = {
            firstName: "Admin",
            lastName: "Niano",
            username: "admin",
            password: "admin",
            status: "A",
        };
        return User.create(user)
            .then((data) => {
                return data.should.have.property('id')
            })
            .catch((err) => {
                throw err;
            })
    });
});
