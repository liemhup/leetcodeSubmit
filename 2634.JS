/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const filteredArray = [];
  for (i = 0; i < arr.length; i++) {
    if (fn(arr[i])) filteredArray.push(arr[i]);
  }
  return filteredArray;
};
