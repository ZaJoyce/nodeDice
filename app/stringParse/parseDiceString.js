'use strict';

const parseDiceString = function (diceString) {
  var match = /^(\d+)?d(\d+)([+-]\d+)?$/.exec(diceString);
  if (!match) {
    throw "Invalid dice notation: " + diceString;
  }
  return {
    count : (typeof match[1] == 'undefined') ? 1 : parseInt(match[1]),
    sides : parseInt(match[2]),
    modifier : (typeof match[3] == 'undefined') ? 0 : parseInt(match[3])
  }
};

module.exports = parseDiceString;
