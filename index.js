'use strict';

const app = require('./app');

let diceString = process.argv[2];
let diceArray = diceString.split('d')
let count = diceArray[0];
let sides = diceArray[1];
let results = app.roll(count, sides);
let sum = app.total(results);

console.table(results);
if (app.double(results)) {
  console.log('Stunt!! ' + results[0])
}
console.log(sum);
