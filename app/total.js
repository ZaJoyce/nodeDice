'use strict';

const total = function(arr){
    return arr.reduce((a, b)=>a + b, 0);
}

module.exports = total;