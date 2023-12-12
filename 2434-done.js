/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function (s) {
  let minimums = [];
  let min = "{";
  let minIndex = -1;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] <= min) {
      min = s[i];
      minIndex = i;
    }
    minimums[i] = minIndex;
  }
  console.log(minimums);
  let stack = [];
  let res = [];
  for (let i = 0; i < s.length; i++) {
    //so sanh phan tu tren cung cua stack voi minimum
    while (stack.length && s[minimums[i]] >= stack.at(-1)) {
      res.push(stack.pop());
    }
    stack.push(s[i]);
  }
  while (stack.length) {
    res.push(stack.pop());
  }
  return res.join("");
};

console.log(robotWithString("zzazzbaz"));
