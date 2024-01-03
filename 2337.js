// You are given two strings start and target, both of length n. Each string consists only of the characters 'L', 'R',
// and '_' where:

//     The characters 'L' and 'R' represent pieces, where a piece 'L' can move to the left only
//     if there is a blank space directly to its left,
//     and a piece 'R' can move to the right only if there is a blank space directly to its right.
//     The character '_' represents a blank space that can be occupied by any of the 'L' or 'R' pieces.

// Return true if it is possible to obtain the string target by moving the pieces of the string start any number of times.
// Otherwise, return false.

/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  let stack = [];
  for (let i = 0; i < start.length; i++) {
    if (start[i] !== "_") {
      stack.push(start[i]);
    }
  }

  for (let i = target.length - 1; i >= 0; i--) {
    if (target[i] !== "_") {
      const char = stack.pop();
      if (char != target[i]) return false;
    }
  }
  return true;
};

let start = "_L__R__R_";
let target = "L______RLR";

console.log(canChange(start, target));
