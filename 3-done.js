// Given a string s, find the length of the longest
// substring
//  without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  if (len === 1) return len;
  let res = 0;
  let low = 0;
  for (high = 1; high < len; high++) {
    while (s.substring(low, high).includes(s[high]) && low <= high) {
      low++;
    }
    res = Math.max(res, high - low + 1);
  }
  return res;
};
const subString = lengthOfLongestSubstring("hello world!!!");
console.log(subString);
