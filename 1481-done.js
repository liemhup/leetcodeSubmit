/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
//331 ms
var findLeastNumOfUniqueInts = function (arr, k) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) map[arr[i]] = 1;
    else map[arr[i]] = map[arr[i]] + 1;
  }
  let count = [];
  for (let num in map) {
    console.log(num);
    count.push(map[num]);
  }
  let res = count.length;
  let i = 0;
  count.sort((a, b) => a - b);
  while (k >= count[i]) {
    k > count[i];
    k -= count[i];
    res--;
    i++;
  }
  console.log(count);
  console.log(count.length);

  console.log(res);
  return res;
};
// 88ms
var findLeastNumOfUniqueInts2 = function (arr, k) {
  const numToFreq = arr.reduce(
    (m, c) => m.set(c, (m.get(c) ?? 0) + 1),
    new Map()
  );
  const sorted = [...numToFreq.values()].sort((a, b) => b - a);
  while (k > 0) {
    if (k >= sorted[sorted.length - 1]) {
      k -= sorted[sorted.length - 1];
      sorted.pop();
    } else {
      k -= sorted[sorted.length - 1];
    }
  }
  return sorted.length;
};

findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3);
