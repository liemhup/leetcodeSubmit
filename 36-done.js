/*

 * Determine if a 9 x 9 Sudoku board is valid. Only the
 filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain 
the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not
 necessarily solvable.
Only the filled cells need to be validated according to the 
mentioned rules.
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (i = 0; i < board[0].length; i++) {
    let row = {};
    for (j = 0; j < board.length; j++) {
      if (board[i][j] !== ".") {
        if (!row[board[i][j]]) {
          row[board[i][j]] = 1;
        } else return false;
      }
    }
  }
  for (i = 0; i < board[0].length; i++) {
    let column = {};
    for (j = 0; j < board.length; j++) {
      if (board[j][i] !== ".") {
        if (!column[board[j][i]]) {
          column[board[j][i]] = 1;
        } else return false;
      }
    }
  }
  const isSquareValid = (r, c) => {
    let squre = {};
    for (i = r; i < r + 3; i++) {
      for (j = c; j < c + 3; j++) {
        if (board[i][j] !== ".") {
          if (!squre[board[i][j]]) {
            squre[board[i][j]] = 1;
          } else return false;
        }
      }
    }
    return true;
  };
  for (let i = 0; i < board[0].length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      if (!isSquareValid(i, j)) return false;
    }
  }

  return true;
};

const board = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
];
console.log(isValidSudoku(board));
