// You are given an integer array nums. The absolute sum of a subarray
// [numsl, numsl+1, ..., numsr-1, numsr] is abs(numsl + numsl+1 + ... + numsr-1 + numsr).

// Return the maximum absolute sum of any (possibly empty) subarray of nums.

// Note that abs(x) is defined as follows:

// If x is a negative integer, then abs(x) = -x.
// If x is a non-negative integer, then abs(x) = x.
/**
 * @param {number[]} nums
 * @return {number}
 */
// brute force -- TLE
var maxAbsoluteSum1 = function (nums) {
  let res = Math.abs(nums[0]);
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      res = Math.max(res, Math.abs(sum));
    }
  }
  return res;
};
/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [
  -7, -1, 0, -2, 1, 3, 8, -2, -6, -1, -10, -6, -6, 8, -4, -9, -4, 1, 4, -9,
];

//wrong
const maxAbsoluteSum = (nums) => {
  let maxSoFar = Math.abs(nums[0]);
  let maxEndingHere = Math.abs(nums[0]);
  let isNeg = nums[0] < 0;
  for (let i = 1; i < nums.length; i++) {
    if (isNeg) {
      maxEndingHere = maxEndingHere - nums[i];
      isNeg = maxEndingHere > 0;
    } else {
      maxEndingHere = maxEndingHere + nums[i];
      isNeg = maxEndingHere < 0;
    }
    if (Math.abs(nums[i]) > Math.abs(maxEndingHere)) {
      isNeg = nums[i] < 0;
      maxEndingHere = Math.abs(nums[i]);
    }
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
};
// Chỉ cần phân ra thành 2 sub problem là tìm min Sum khi maxAbs là âm và max sum khi max abs là dương
const maxAbsoluteSum2 = (nums) => {
  let maxSum = nums[0];
  let minSum = nums[0];
  let maxAbsSum = Math.abs(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    maxSum = Math.max(nums[i], maxSum + nums[i]);
    minSum = Math.min(nums[i], minSum + nums[i]);
    maxAbsSum = Math.max(
      maxAbsSum,
      Math.max(Math.abs(maxSum), Math.abs(minSum))
    );
  }

  return maxAbsSum;
};
// thiên tài. Tìm max của nums, đồng thời đổi dấu của nums, sau đó lại tìm max của nums
var maxAbsoluteSum3 = function (nums) {
  let max = -Infinity;
  let su = 0;
  for (let i = 0; i < nums.length; i++) {
    su += nums[i];
    nums[i] = -1 * nums[i];
    max = Math.max(su, max);
    if (su < 0) {
      su = 0;
    }
  }
  su = 0;
  for (let i = 0; i < nums.length; i++) {
    su += nums[i];
    max = Math.max(su, max);
    if (su < 0) {
      su = 0;
    }
  }

  return max;
};
// console.log(maxAbsoluteSum([-3, 1, -5, 2, 7, -6, 8, -10]));
console.log(maxAbsoluteSum(nums));
console.log(maxAbsoluteSum2(nums));
