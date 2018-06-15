'use strict';

const getRandomInt = require('./random');

const roll = function(sides){
    return getRandomInt(1,sides);
}

module.exports = roll;