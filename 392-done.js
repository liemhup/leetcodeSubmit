/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;
  while (j < t.length && i < s.length) {
    if (s[i] === t[j]) i++;
    j++;
  }
  if (j <= t.length && i === s.length) return true;
  return false;
};

let s = "axc";
let t = "adcxb";

console.log(isSubsequence(s, t));
