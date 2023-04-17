const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  const resArr = [];
  if (!Array.isArray(arr)) {
    throw new NotImplementedError(
      "arr parameter must be an instance of the Array!"
    );
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      resArr.push(arr[i]);
    }
    switch (arr[i]) {
      case "--discard-next":
        arr.splice(i, 1);
        break;

      case "--discard-prev":
        if (resArr.length !== 0) {
          resArr.length = resArr.length - 1;
        }
        break;

      case "--double-next":
        if (i !== arr.length - 1) {
          resArr.push(arr[i + 1]);
        }
        break;

      case "--double-prev":
        if (resArr.length !== 0) {
          resArr.push(arr[i - 1]);
        }
        break;

      default:
        break;
    }
  }
  return resArr;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform,
};
