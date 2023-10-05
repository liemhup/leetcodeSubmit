/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const splited = s.split(" ");
  splited.reverse();
  let res = "";
  splited.forEach((word) => {
    if (word.length) res = res + word + " ";
  });
  return res.trim();
};

const reversed = reverseWords("hello world, im   Liem");

console.log(reversed);
