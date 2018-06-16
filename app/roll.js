'use strict';

const dice = require('./dice');
let rolls = [];

const roll = function (rollCount, dicesides) {
    for (let i = 0; i < rollCount; i++) {
        rolls.push(dice(dicesides));
    }
    return rolls;
}
module.exports = roll;