/**
 * Given an m x n grid of characters board and
 *  a string word, return true if word exists in the grid.

The word can be constructed from letters of 
sequentially adjacent cells, where adjacent cells are 
horizontally or vertically neighboring. The same letter 
cell may not be used more than once.
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function (board, word) {
  if (!isValidByAvailableSymbols(board, word)) return false;
  return checkPhrase(board, word);
};

const isValidByAvailableSymbols = (board, word) => {
  let wordCounter = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      wordCounter[board[i][j]] = (wordCounter[board[i][j]] || 0) + 1;
    }
  }

  for (let i = 0; i < word.length; i++) {
    if (wordCounter[word[i]] !== undefined && wordCounter[word[i]] >= 0) {
      wordCounter[word[i]]--;
    } else {
      return false;
    }
  }

  return true;
};
const checkPhrase = (board, word) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (dfs(board, word, i, j)) {
        return true;
      }
    }
  }
  return false;
};

const dfs = (board, word, i, j, cursor = 0) => {
  // when cursor reaches the length of the word, it means
  // that the script handled whole word in the previous step and the result is true
  if (cursor === word.length) {
    return true;
  }

  // reached the edge of the board or already handled symbol
  if (board[i]?.[j] !== word[cursor] || board[i][j] === -1) {
    return false;
  }

  // mark as visited
  board[i][j] = -1;

  // handle the neighbours
  if (
    dfs(board, word, i + 1, j, cursor + 1) ||
    dfs(board, word, i, j + 1, cursor + 1) ||
    dfs(board, word, i - 1, j, cursor + 1) ||
    dfs(board, word, i, j - 1, cursor + 1)
  )
    return true;
  // New check het hang xom ma van ko return true thi dat lai gia tri cho board[i][j]
  board[i][j] = word[cursor];

  return false;
};

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "F", "E"],
  ["A", "D", "F", "E"],
  ["A", "D", "F", "E"],
  ["S", "F", "C", "S"],
  ["A", "B", "C", "E"],
  ["A", "D", "F", "E"],
  ["A", "D", "F", "E"],
  ["A", "D", "F", "E"],
];

const word = "CFDDFE";

console.log(exist(board, word));
console.log(board);
