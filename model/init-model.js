const User = require('./user-model');
const Permition = require('./permition-model');
const Routine = require('./routine-model');

function init() {
    const option = { force: false };
    User.sync(option);
    Permition.sync(option);
    Routine.sync(option);
}

module.exports = init;