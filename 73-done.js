/**
 * Given an m x n integer matrix matrix, 
 * if an element is 0, set its entire row and column to 0's.

You must do it in place.
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const row = [];
  const col = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        if (!row.includes(i)) row.push(i);
        if (!col.includes(j)) col.push(j);
      }
    }
  }
  for (rowIndex in row) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row[rowIndex]][i] = 0;
    }
  }
  for (colIndex in col) {
    console.log("colIndex", colIndex);
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col[colIndex]] = 0;
    }
  }
};

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
const res = [
  [0, 0, 0, 0],
  [0, 4, 5, 0],
  [0, 3, 1, 0],
];

setZeroes(matrix);
console.log(matrix);
