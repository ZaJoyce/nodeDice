'use strict';

const getRandomInt = require('./getRandomInt');

const dice = function (sides) {
    return getRandomInt(1, sides);
}

module.exports = dice;