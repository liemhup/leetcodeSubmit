/**
 * Given an m x n matrix board containing 'X' and 'O',
 *  capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Given an m x n matrix board containing 'X' and 'O',
 capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

1. Duyệt qua tất cả các phần tử
2. Nếu phần tử đó ở viền và == 'o' thì thay nó bằng '1'

 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (board.length < 3 || board.length < 3) return;
  const isOnBorder = (i, j) =>
    i == 0 || i == board.length - 1 || j == 0 || j == board[0].length - 1;
  const isBeyondBoard = (i, j) =>
    i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1;

  const callDFS = (i, j) => {
    if (isBeyondBoard(i, j) || board[i][j] !== "O") return;
    board[i][j] = "1";
    callDFS(i + 1, j);
    callDFS(i - 1, j);
    callDFS(i, j - 1);
    callDFS(i, j + 1);
  };
  for (i = 0; i < board.length; i++) {
    for (j = 0; j < board[0].length; j++) {
      if (board[i][j] == "O" && isOnBorder(i, j)) {
        callDFS(i, j);
      }
    }
  }
  console.log(board);
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve2 = function (board) {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === "O" && isOnBorder(r, c)) {
        checkNeighbours(r, c);
      }
    }
  }

  function isOnBorder(r, c) {
    return (
      r === 0 || r === board.length - 1 || c === 0 || c === board[r].length - 1
    );
  }

  function checkNeighbours(r, c) {
    if (isBeyondBoard(r, c) || board[r][c] !== "O") {
      return;
    }

    board[r][c] = "Visited";

    checkNeighbours(r + 1, c);
    checkNeighbours(r, c + 1);
    checkNeighbours(r - 1, c);
    checkNeighbours(r, c - 1);
  }

  function isBeyondBoard(r, c) {
    return r < 0 || r >= board.length || c < 0 || c >= board[r].length;
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === "Visited") {
        board[r][c] = "O";
      } else {
        board[r][c] = "X";
      }
    }
  }
};

const board = [
  ["X", "X", "X", "O"],
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "X", "X"],
  ["X", "O", "X", "X"],
];
solve(board);
