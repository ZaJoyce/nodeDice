'use strict';

const getRandomInt = require('./random');

const dice = function(sides){
    return getRandomInt(1,sides);
}

module.exports = dice;