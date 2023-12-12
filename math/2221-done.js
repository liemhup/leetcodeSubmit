/**
 * @param {number[]} nums
 * @return {number}
 */

// You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).

// The triangular sum of nums is the value of the only element
// present in nums after the following process terminates:
// Let nums comprise of n elements.If n == 1, end the process.
//     Otherwise, create a new 0 - indexed integer array newNums of length n - 1.
// For each index i, where 0 <= i < n - 1, assign the value of
// newNums[i] as (nums[i] + nums[i + 1]) % 10, where % denotes modulo operator.
// Replace the array nums with newNums.
// Repeat the entire process starting from step 1.
// Return the triangular sum of nums.

//too slow
var triangularSum1 = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      nums[j] = (nums[j] + nums[j + 1]) % 10;
    }
  }
  return nums[0];
};

var triangularSum = function (nums) {
  while (nums.length > 1) {
    const newNums = [];
    for (let i = 0; i < nums.length - 1; i++) {
      newNums.push((nums[i] + nums[i + 1]) % 10);
    }
    nums = newNums;
  }
  return nums[0];
};

console.log(triangularSum([1, 2, 3, 4, 5]));
