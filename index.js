'use strict';

const roll = require('./app/roll')

let diceString = process.argv[2];

let diceArray = diceString.split('d')

let count = diceArray[0];
let sides = diceArray[1];


console.log(diceArray);

console.log(roll(count, sides));