// Given an integer array nums, return the length of the longest strictly increasing
// subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */
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
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(nums);
console.log(lengthOfLIS(nums));
