//  Given a string word, return the sum of the number of vowels ('a', 'e', 'i', 'o', and 'u') in every substring of word.

//  A substring is a contiguous(non - empty) sequence of characters within a string.We must not generating substrings and time must not be O(n^2)

//  Note: Due to the large constraints, the answer may not fit in a signed 32-bit integer. Please be careful during the calculations.

/**
 * @param {string} word
 * @return {number}
 */

var countVowels = function (word) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let total = 0;
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    // nếu ký tự là nguyên âm thì tổng số subString mới sẽ  tăng lên count+i+1 còn nếu không phải thì tăng lên count
    if (vowels.has(word[i])) {
      count = count + i + 1;
    }
    total += count;
  }
  console.log(total);
  return total;
};

countVowels("hgelello");

// hellol: hellol ellol hello
