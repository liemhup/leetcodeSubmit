// You are given an integer array arr. Sort the integers in the array in ascending order by the number of
// 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

// Return the array after sorting it.

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  let map = [];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map[countOnes(arr[i])]) {
      map[countOnes(arr[i])] = [arr[i]];
    } else map[countOnes(arr[i])].push(arr[i]);
  }
  for (let i = 0; i < map.length; i++) {
    if (!map[i]) continue;
    map[i].forEach((element) => {
      res.push(element);
    });
  }
  return res;
};

function countOnes(n) {
  let count = 0;
  while (n) {
    n &= n - 1;
    count++;
  }
  return count;
}

let arr = [1, 54, 7, 8, 9, 2, 4, 5];
console.log(sortByBits(arr));
