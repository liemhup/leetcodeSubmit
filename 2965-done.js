// You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2].
// Each integer appears exactly once except a which appears twice and b which is missing.
// The task is to find the repeating and missing numbers a and b.

// Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  let set = new Set();
  let repeat;
  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!set.has(grid[i][j])) set.add(grid[i][j]);
      else {
        repeat = grid[i][j];
      }
      sum += grid[i][j];
    }
  }
  let n = grid.length;
  let expectedSum = (n * n * (n * n + 1)) / 2;
  let mis = expectedSum - sum + repeat;
  return [repeat, mis];
};

grid = [
  [1, 3],
  [2, 2],
];
console.log(findMissingAndRepeatedValues(grid));
