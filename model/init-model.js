const User = require('./user-model');

function init() {
    const option = { force: false };
    User.sync(option);
}

module.exports = init;