/**
 * Medium
 * You are given an array of strings tokens that represents
 *  an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents
 the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be 
represented in a 32-bit integer.
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (i = 0; i < tokens.length; i++) {
    if (
      tokens[i] != "+" &&
      tokens[i] != "/" &&
      tokens[i] != "*" &&
      tokens[i] != "-"
    ) {
      stack.push(tokens[i]);
    } else {
      switch (tokens[i]) {
        case "/": {
          stack.push(
            Math.trunc((1 / Number(stack.pop())) * Number(stack.pop()))
          );
          break;
        }
        case "*":
          stack.push(Number(stack.pop()) * Number(stack.pop()));
          break;
        case "+":
          stack.push(Number(stack.pop()) + Number(stack.pop()));
          break;
        default:
          stack.push(-Number(stack.pop()) + Number(stack.pop()));
          break;
      }
    }
  }
  return stack[0];
};

const tokens = ["4", "8", "+", "3", "/"];
const res = evalRPN(tokens);

console.log("res = ", res);
