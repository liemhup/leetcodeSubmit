// Companies
// Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  if (arr.length === 0) return [[]];
  const res = [];
  const helper = (arr) => {
    if (size >= arr.length) {
      res.push(arr);
      return;
    }
    const spliced = arr.splice(0, size);
    res.push(spliced);
    return helper(arr);
  };

  helper(arr);
  return res;
};

chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);
