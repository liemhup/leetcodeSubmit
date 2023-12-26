// You are given a string s consisting of digits from 1 to 9 and an integer k.

// A partition of a string s is called good if:

//     Each digit of s is part of exactly one substring.
//     The value of each substring is less than or equal to k.

// Return the minimum number of substrings in a good partition of s.
// If no good partition of s exists, return -1.

// Note that:

//     The value of a string is its result when interpreted as an integer.
//     For example, the value of "123" is 123 and the value of "1" is 1.
//     A substring is a contiguous sequence of characters within a string.

var minimumPartition = function (s, k) {
  let digits = 0;
  let temp = k;
  while (temp) {
    digits++;
    temp = Math.floor(temp / 10);
  }
  let res = 0;
  let step = 0;
  for (let i = 0; i < s.length; i = i + step) {
    if (Number(s.substring(i, i + digits)) > k) {
      if (digits == 1) return -1;
      step = digits - 1;
    } else step = digits;
    res++;
  }
  return res;
};

const s = '54312580941';
const k = 40;

minimumPartition(s, k);
