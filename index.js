'use strict';

const getRandomInt = require('./app/random');
let rolltotal = 0
let rolls = [];

for(let i=0; i<100; i++){
    
    rolls.push(getRandomInt(1,6))
    
    rolltotal += rolls[i]
    

}
console.log(rolltotal/100)

console.log(getRandomInt(1,6));