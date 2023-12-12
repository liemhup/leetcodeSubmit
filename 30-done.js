// You are given a string s and an array of strings words.
// All the strings of words are of the same length.

// A concatenated substring in s is a substring that contains
// all the strings of any permutation of words concatenated.

// For example, if words = ["ab", "cd", "ef"], then "abcdef",
// "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab"
// are all concatenated strings. "acdbef" is not a concatenated
// substring because it is not the concatenation of any permutation of words.
// Return the starting indices of all the concatenated substrings in s.
//  You can return the answer in any order.

var findSubstring = function (s, words) {
  function isSetEqual(set1, set2) {
    console.log(set1, set2);
    if (Object.keys(set1).length !== Object.keys(set2).length) {
      return false;
    }

    for (const item in set1) {
      if (!set2[item] || set1[item] !== set2[item]) {
        return false;
      }
    }

    return true;
  }
  function countWords(words) {
    const wordCount = {};

    for (const word of words) {
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    }

    return wordCount;
  }
  const wordsLen = words[0].length;
  const subLen = words.length * words[0].length;
  const wordsCount = countWords(words);
  const res = [];
  const isCancatenated = (s) => {
    const subStringWords = [];
    for (let i = 0; i < s.length; i += wordsLen) {
      subStringWords.push(s.substring(i, i + wordsLen));
    }
    const subCount = countWords(subStringWords);

    return isSetEqual(subCount, wordsCount);
  };
  for (let i = 0; i < s.length - subLen + 1; i++) {
    if (isCancatenated(s.substring(i, i + subLen))) {
      res.push(i);
    }
  }
  return res;
};

// const s = "barfoofoobarthefoobarman";
// const words = ["bar", "foo", "the"];
const s = "wordgoodgoodgoodbestword";
const words = ["word", "good", "best", "good"];

console.log(findSubstring(s, words));


//gan tuong tu nhung khac nhau cach so sanh object
var findSubstring2 = function (s, words) {
  const result = [];
  const wordLength = words[0].length;
  const totalWords = words.length;
  const totalChars = wordLength * totalWords;
  const wordCount = {};

  words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  for (let i = 0; i < wordLength; i++) {
    let left = i;
    let right = i;
    let currentWordCount = {};

    while (right + wordLength <= s.length) {
      const currentWord = s.slice(right, right + wordLength);
      right += wordLength;

      if (wordCount.hasOwnProperty(currentWord)) {
        currentWordCount[currentWord] =
          (currentWordCount[currentWord] || 0) + 1;

        while (currentWordCount[currentWord] > wordCount[currentWord]) {
          const leftWord = s.slice(left, left + wordLength);
          left += wordLength;
          currentWordCount[leftWord]--;
        }

        if (right - left === totalChars) {
          result.push(left);
        }
      } else {
        currentWordCount = {};
        left = right;
      }
    }
  }

  return result;
};

console.log(findSubstring2(s, words));
