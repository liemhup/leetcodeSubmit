/**
 * According to Wikipedia's article: "The Game of Life, also known 
 * simply as Life, is a cellular automaton devised by the British
 *  mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell
 has an initial state: live (represented by a 1) or dead (represented by a 0). 
 Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) 
 using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by 
under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by 
reproduction.
The next state is created by applying the above rules simultaneously to 
every cell in the current state, where births and deaths occur simultaneously.
 Given the current state of the m x n grid board, return the next state.
 
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const m = board.length;
  const n = board[0].length;
  let middleState = new Array(m + 2)
    .fill(0)
    .map(() => new Array(n + 2).fill(0));
  const changeState = (r, c) => {
    for (let i = r - 1; i < r + 2; i++) {
      for (let j = c - 1; j < c + 2; j++) {
        middleState[i][j] = middleState[i][j] === 0 ? 1 : middleState[i][j] + 1;
      }
    }
    middleState[r][c] -= 1;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        changeState(i + 1, j + 1);
      }
    }
  }
  console.log(middleState);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      //   if (middleState[i + 1][j + 1] < 2) {
      //     board[i][j] = 0;
      //   }
      //   if (middleState[i + 1][j + 1] > 3) {
      //     board[i][j] = 0;
      //   }
      switch (middleState[i + 1][j + 1]) {
        case 1:
          board[i][j] = 0;
          break;
        case 2:
          break;
        case 3:
          board[i][j] = 1;
          break;
        default:
          board[i][j] = 0;
          break;
      }
    }
  }
  return board;
};
const board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];

console.log(gameOfLife(board));
