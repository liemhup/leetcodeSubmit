// Let the function f(s) be the frequency of the lexicographically smallest character in a non-empty string s.
//  For example, if s = "dcce" then f(s) = 2 because the lexicographically smallest character is 'c', which has a frequency of 2.

// You are given an array of strings words and another array of query strings queries.
//  For each query queries[i], count the number of words in words such that f(queries[i]) < f(W) for each W in words.

// Return an integer array answer, where each answer[i] is the answer to the ith query.
/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
  const frequency = (string) => {
    let count = 1;
    let smallest = string[0];
    for (let i = 1; i < string.length; i++) {
      if (string[i] > smallest) {
        continue;
      }
      if (string[i] < smallest) {
        smallest = string[i];
        count = 1;
        continue;
      }
      count++;
    }
    return count;
  };
  for (let i = 0; i < queries.length; i++) {
    queries[i] = frequency(queries[i]);
  }
  console.log(queries);
  for (let i = 0; i < words.length; i++) {
    words[i] = frequency(words[i]);
  }
  console.log(words);
  let res = [];
  let count = 0;
  for (let i = 0; i < queries.length; i++) {
    count = 0;
    for (let j = 0; j < words.length; j++) {
      if (queries[i] < words[j]) {
        count++;
      }
    }
    res.push(count);
  }
  return res;
};
let queries = [
  "bba",
  "abaaaaaa",
  "aaaaaa",
  "bbabbabaab",
  "aba",
  "aa",
  "baab",
  "bbbbbb",
  "aab",
  "bbabbaabb",
];
let words = [
  "aaabbb",
  "aab",
  "babbab",
  "babbbb",
  "b",
  "bbbbbbbbab",
  "a",
  "bbbbbbbbbb",
  "baaabbaab",
  "aa",
];

console.log(numSmallerByFrequency(queries, words));
