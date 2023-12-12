/**
 * Given a string s containing just the characters\
 *  '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  const stack = [];
  for (i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      stack.push(s[i]);
    }
    if (s[i] == ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        return false;
      }
    }
    if (s[i] == "]") {
      if (stack[stack.length - 1] == "[") {
        stack.pop();
      } else return false;
    }
    if (s[i] == "}") {
      if (stack[stack.length - 1] == "{") {
        stack.pop();
      } else return false;
    }
  }
  return stack.length === 0;
};

const s = "()[]{[()]}";
console.log(isValid(s));
