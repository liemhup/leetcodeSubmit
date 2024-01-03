// You are given a positive integer num.
// You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits).

// Return the largest possible value of num after any number of swaps.
/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
  let arr1 = [];
  let arr2 = [];
  let arr = [];
  while (num > 0) {
    let digit = num % 10;
    arr.push(digit);
    num = Math.floor(num / 10);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      res.push(arr1.pop());
    } else res.push(arr2.pop());
  }

  return Number(res.reverse().join(""));
};

let num = 221455;

largestInteger(num);
