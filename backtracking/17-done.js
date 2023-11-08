/**
 * Given a string containing digits from 2-9 inclusive, 
 * return all possible letter combinations that the number 
 * could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons)
 is given below. Note that 1 does not map to any letters.
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return;
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "xwyz",
  };
  let path = [];
  const letters = map[digits[0]];
  for (j = 0; j < letters.length; j++) {
    path.push(letters[j]);
  }
  let helper = (digits1, path1, res1) => {
    if (path[0].length === digits.length) {
      return;
    }
    const letters = map[digits[path[0].length]];
    const length = path.length;
    for (i = 0; i < length; i++) {
      path.push(path[i] + letters[1]);
      path.push(path[i] + letters[2]);
      if (letters.length == 4) {
        path.push(path[i] + letters[3]);
      }
      path[i] = path[i] + letters[0];
    }
    helper(digits1, path1, res1);
  };
  helper(digits.substring(1), path);
  return path;
};

const digits = "98";

console.log(letterCombinations(digits));
