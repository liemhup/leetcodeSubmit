// For two strings s and t, we say "t divides s" if and only if s = t + ... + t
// (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 == str2) return str1;
  let isDevidesable = (prefix, str) => {
    let i = prefix.length;
    let temp = str;
    while (i <= temp.length) {
      if (prefix !== temp.slice(0, i)) return false;
      temp = temp.slice(i);
    }
    return temp == "";
  };
  let smaller = Math.min(str1.length, str2.length);
  for (let i = smaller; i > 0; i--) {
    if (!isDevidesable(str1.slice(0, i), str1)) continue;
    if (!isDevidesable(str1.slice(0, i), str2)) continue;
    return str1.slice(0, i);
  }
};
const str1 = "ABABAB";
const str2 = "ABAB";
console.log(gcdOfStrings(str1, str2));
