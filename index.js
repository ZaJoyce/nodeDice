'use strict';

const app = require('./app');

let diceString = process.argv[2] || '3d6';
let diceArray = diceString.split(/d|D/);
let count = diceArray[0]
console.log(count);
let sides = diceArray[1]
console.log(sides);
let results = app.roll(count, sides);
let sum = app.total(results);

console.table(results);
if (app.double(results)) {
  console.log('Stunt!! ' + results[0])
}
console.log(sum);
