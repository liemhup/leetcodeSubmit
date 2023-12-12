/**
 * Given two integers n and k, return all possible 
 * combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (!k) return [];
  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  const res = [];
  const path = [];
  const helper = (i, path, res) => {
    if (path.length === k) {
      res.push([...path]);
      return;
    }
    for (i; i < numbers.length; i++) {
      path.push(numbers[i]);
      helper(i + 1, path, res);
      path.pop();
    }
    // path.pop();
  };
  // for (i = 0; i < numbers.length; i++) {
  //   helper(i);
  // }
  helper(0, path, res);
  return res;
};

const res = combine(4, 3);

console.log(res);
