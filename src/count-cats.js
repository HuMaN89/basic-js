const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const arr = matrix.flat(Infinity);
  let res = 0;
  arr.forEach((el) => {
    el === "^^" && (res += 1);
  });
  return res;
}

module.exports = {
  countCats,
};
