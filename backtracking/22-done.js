/**
 * Given n pairs of parentheses,
 * write a function to generate all combinations of well-formed parentheses.
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis1 = function (n) {
  let res = [];

  const helper = (str, open, close, n, res) => {
    if (open == n && close == n - 1) {
      //   console.log(str);
      res.push(str + ")");
      return;
    }
    if (open < n) helper(str + "(", open + 1, close, n, res);
    if (close < open) helper(str + ")", open, close + 1, n, res);
  };
  helper("(", 1, 0, n, res);
  //   console.log(res);
  return res;
};

var generateParenthesis2 = function (n) {
  const result = [];
  const stack = ["("];

  function generate(openCount, closedCount, stack) {
    if (closedCount === n && n === openCount) {
      result.push(stack.join(""));
      return;
    }

    if (openCount < n) {
      stack.push("(");
      generate(openCount + 1, closedCount, stack);
      stack.pop();
    }

    if (closedCount < openCount) {
      stack.push(")");
      generate(openCount, closedCount + 1, stack);
      stack.pop();
    }
  }
  generate(1, 0, stack);
  //   console.log(result);
  return result;
};
//Strings in JavaScript are immutable, meaning that once a string is created, 
// it cannot be modified.So, when you add characters to a string using concatenation
// (+ operator or +=), a new string is created each time, which can be inefficient if done repeatedly.

// On the other hand, arrays in JavaScript are mutable data structures.
//  When you push elements into an array using the push method, it simply 
//  adds the element to the end of the array, which is a constant - time operation.
//     Then, when you join the array using the join method, it concatenates the elements
//  of the array into a string.
generateParenthesis(3);
