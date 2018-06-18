'use strict';

const rolling = require('./app/rolling/');
const parseDiceString = require('./app/stringParse/parseDiceString');

let diceString = process.argv[2] || '3d6';
let diceObject = parseDiceString(diceString);

//console.log(diceObject);
let results = rolling.roll(diceObject.count, diceObject.sides);
let sum = rolling.total(results);
let modSum = sum + diceObject.modifier;

console.table(results);
if (rolling.double(results)) {
  console.log('Stunt!! ' + results[0])
}
console.log(
  `Roll: ${sum}
Plus Modifier: ${modSum}`
);

//todo : add regex to handle dice notation
