'use strict';

const roll = require('./app/roll')

let diceString = process.argv[2];

let diceArray = diceString.split('d')

let count = diceArray[0];
let sides = diceArray[1];

let results = roll(count, sides);

let sum = results.reduce((a, b)=>a + b, 0);

console.log(results + ' ' + sum);