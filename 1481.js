/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const map = new Map();
  for (i = 0; i < arr.length; i++) {
    map[i] += 1;
  }
  console.log(map);
};

findLeastNumOfUniqueInts([1, 23, 2, 3, 23, 2, 1, 1, 1, , 45, 5, 6, 4, 4], 5);
