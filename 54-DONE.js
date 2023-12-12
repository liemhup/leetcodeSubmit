// Cho mot ma tran, tra ve mang theo chieu xoan oc
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  if (matrix.length === 1) return matrix[0];
  if (matrix[0].length === 1) {
    const res = [];
    for (i = 0; i < matrix.length; i++) {
      console.log(matrix[i][0]);
      res.push(matrix[i][0]);
    }
    return res;
  }
  const res = matrix[0];
  matrix.shift();
  console.log('maxtrix: ', matrix);
  for (i = 0; i < matrix.length; i++) {
    const poped = matrix[i].pop();
    res.push(poped);
  }
  const popedRow = matrix.pop().reverse();
  res.push.apply(res, popedRow);
  for (i = matrix.length - 1; i >= 0; i--) {
    const poped = matrix[i].shift();
    if (matrix[i].length === 0) matrix.pop();
    res.push(poped);
  }

  res.push.apply(res, spiralOrder(matrix));
  return res;
};

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const matrix = [[3], [2]];
const matrix = [
  [1, 11],
  [2, 12],
  [3, 13],
  [4, 14],
  [5, 15],
  [6, 16],
  [7, 17],
  [8, 18],
  [9, 19],
  [10, 20],
];
console.log(spiralOrder(matrix));
