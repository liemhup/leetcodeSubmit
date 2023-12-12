// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (target < matrix[0][0]) return false;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] > target) {
      row = i == 0 ? 0 : i - 1;
      break;
    }
  }
  for (let j = 0; j < matrix[row].length; j++) {
    if (matrix[row][j] == target) return true;
  }
  return false;
};

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const isInclude = searchMatrix(matrix, 13);
console.log(isInclude);
