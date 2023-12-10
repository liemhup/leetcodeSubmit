// Given an integer array nums, return the length of the longest strictly increasing
// subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */

//patience sort

var lengthOfLIS = (nums) => {
  return nums.reduce(
    (sequence, num) => {
      if (num > sequence[sequence.length - 1]) sequence.push(num);
      else {
        if (sequence.length == 1) sequence[0] = num;
        else sequence[sequence.findIndex((val) => val >= num)] = num;
        // if (sequence.length == 1) sequence[0] = num;
      }
      return sequence;
    },
    [nums[0]]
  ).length;
};
const nums = [
  10, 9, 2, 5, 3, 7, 101, 18, 3, 5, 1, 23, 6, 87, 4234, 455, 223, 445, 99, 224,
  565, 234, 6554, 1234, 1233, 6554, 7, 343, 2245, 85467, 23452, 2455,
];
console.time("lengthOfLIS");
const len = lengthOfLIS(nums);
// console.log(len / nums.length);
console.timeEnd("lengthOfLIS");
