'use strict';

const rolling = require('./app/rolling/');

let diceString = process.argv[2] || '3d6';
let diceArray = diceString.split(/d|D/);
let count = diceArray[0]
console.log(count);
let sides = diceArray[1]
console.log(sides);
let results = rolling.roll(count, sides);
let sum = rolling.total(results);

console.table(results);
if (rolling.double(results)) {
  console.log('Stunt!! ' + results[0])
}
console.log(sum);

//todo : add regex to handle dice notation
