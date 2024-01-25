// On an alphabet board, we start at position (0, 0), corresponding to character board[0][0].

// Here, board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"], as shown in the diagram below.

// 'U' moves our position up one row, if the position exists on the board;
// 'D' moves our position down one row, if the position exists on the board;
// 'L' moves our position left one column, if the position exists on the board;
// 'R' moves our position right one column, if the position exists on the board;
// '!' adds the character board[r][c] at our current position (r, c) to the answer.
// (Here, the only positions that exist on the board are positions with letters on them.)

// Return a sequence of moves that makes our answer equal to target in the minimum number of moves.
//   You may return any path that does so.
/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
  let res = [];
  let board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"];
  let map = new Map();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      map.set(board[i][j], [i, j]);
    }
  }
  let current = [0, 0];
  let helper = (char, current) => {
    let tar = map.get(char);
    if (tar[0] == current[0] && tar[1] == current[1]) {
      res.push("!");
      return;
    }
    if (current[0] == 5) {
      res.push("U");
      current[0]--;
    }
    while (current[1] != tar[1]) {
      if (tar[1] > current[1]) {
        res.push("R");
        current[1]++;
      } else {
        res.push("L");
        current[1]--;
      }
    }
    while (current[0] != tar[0]) {
      if (tar[0] > current[0]) {
        res.push("D");
        current[0]++;
      } else {
        res.push("U");
        current[0]--;
      }
    }

    res.push("!");
  };
  for (let i = 0; i < target.length; i++) {
    helper(target[i], current);
  }
  // console.log(res.join(""));
  return res.join("");
};

let target = "zz";

alphabetBoardPath(target);
