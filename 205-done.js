/**
 * Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be 
replaced to get t.

All occurrences of a character must be replaced with another 
character while preserving the order of characters. No two characters 
may map to the same character, but a character may map to itself.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;
  const map1 = {};
  const map2 = {};
  for (let idx = 0; idx < s.length; idx++) {
    if (map1[s[idx]] != map2[t[idx]]) return false;
    map1[s.charAt(idx)] = idx;
    map2[t.charAt(idx)] = idx;
  }
  
  return true; // Otherwise return true...
};

const a = "acaaad";
const b = "bdbbbt";

console.log(isIsomorphic(a, b));
