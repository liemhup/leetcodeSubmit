// You are given two strings word1 and word2.
//  Merge the strings by adding letters in alternating order, starting with word1.
//  If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < word1.length && j < word2.length) {
    res.push(word1[i]);
    res.push(word2[j]);
    j++;
    i++;
  }
  if (word1.length == word2.length) return res.join("");
  if (word1.length > word2.length) {
    return res.join("") + word1.slice(j);
  } else return res.join("") + word2.slice(i);
};
const word1 = "abc";
const word2 = "pqroe";

console.log(mergeAlternately(word1, word2));
