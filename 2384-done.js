//You are given a string num consisting of digits only.

// Return the largest palindromic integer (in the form of a string) that can be formed using digits taken from num. It should not contain leading zeroes.

// Notes:

// You do not need to use all the digits of num, but you must use at least one digit.
// The digits can be reordered.

/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function (num) {
  let temp = '';
  const map = {};
  let BigestDigit = 0;
  for (i = 0; i < num.length; i++) {
    map[num[i]] == undefined ? (map[num[i]] = 1) : (map[num[i]] += 1);
  }

  for (key in map) {
    BigestDigit = key > BigestDigit && map[key] % 2 === 1 ? key : BigestDigit;
    if (map[key] < 2) continue;
    let i = 0;
    while (i < Math.floor(map[key] / 2)) {
      temp += key;
      i++;
    }
  }

  if (temp[temp.length - 1] === '0') temp = '';
  //   BigestDigit = BigestDigit === 0 ? '' : BigestDigit;

  const reversTemp = temp.split('').reverse().join('');
  let res =
    temp.length !== num.length / 2
      ? reversTemp + BigestDigit + temp
      : reversTemp + temp;
  return res === '' ? '0' : res;
};

console.log(largestPalindromic('0900'));
