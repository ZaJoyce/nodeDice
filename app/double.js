'use strict';

const double = function (array) {
  return (new Set(array)).size !== array.length;
}
module.exports = double;
