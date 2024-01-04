// Given an array nums of integers, return how many of them contain an even number of digits.
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let res = 0;
  for (let num of nums) {
    if (numberOfDigits(num) % 2 == 0) {
      res++;
    }
  }
  return res;
};

const numberOfDigits = (num) => {
  let res = 0;
  while (num) {
    num = Math.floor(num / 10);
    res++;
  }
  return res;
};

nums = [12, 345, 2, 6, 7896];

findNumbers(nums);
