/**
 * @param {number} num
 * @return {string}
 */
//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two one's
// added together. 12 is written as XII, which is simply X + II. The number
//  27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to
// right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9.
//     X can be placed before L (50) and C (100) to make 40 and 90.
//     C can be placed before D (500) and M (1000) to make 400 and 900.

// Given an integer, convert it to a roman numeral.

var intToRoman = function (num) {
  const map = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };
  let res = '';
  while (num > 0) {
    if (num >= 1000) {
      res += map[1000];
      num -= 1000;
    } else if (num >= 900) {
      res += map[900];
      num -= 900;
    } else if (num >= 500) {
      res += map[500];
      num -= 500;
    } else if (num >= 400) {
      res += map[400];
      num -= 400;
    } else if (num >= 100) {
      res += map[100];
      num -= 100;
    } else if (num >= 90) {
      res += map[90];
      num -= 90;
    } else if (num >= 50) {
      res += map[50];
      num -= 50;
    } else if (num >= 40) {
      res += map[40];
      num -= 40;
    } else if (num >= 10) {
      res += map[10];
      num -= 10;
    } else if (num >= 9) {
      res += map[9];
      num -= 9;
    } else if (num >= 5) {
      res += map[5];
      num -= 5;
    } else if (num >= 4) {
      res += map[4];
      num -= 4;
    } else if (num >= 1) {
      res += map[1];
      num -= 1;
    }
  }
  return res;
};

/**
 * @param {number} num
 * @return {string}
 */

//best way. genius!!!
const intToRoman2 = (num) => {
  const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const thousands = ['', 'M', 'MM', 'MMM'];

  return (
    thousands[Math.floor(num / 1000)] +
    hundreds[Math.floor((num % 1000) / 100)] +
    tens[Math.floor((num % 100) / 10)] +
    ones[num % 10]
  );
};

const res = intToRoman(8);
console.log(res);
