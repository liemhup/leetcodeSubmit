// Given an array of positive integers nums and
// a positive integer target, return the minimal length of a
// subarray
//  whose sum is greater than or equal to target.If
//  there is no such subarray, return 0 instead.

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

//Time limited exceeded
// var minSubArrayLen = function (target, nums) {
//   let i = 1;
//   while (i <= nums.length) {
//     let windowSum = 0;
//     for (j = 0; j < i; j++) {
//       windowSum += nums[j];
//     }
//     if (windowSum >= target) return i;
//     for (j = 0; j < nums.length - i; j++) {
//       windowSum = windowSum - nums[j] + nums[j + i];
//       if (windowSum >= target) {
//         return i;
//       }
//     }
//     i++;
//   }
//   return 0;
// };

const minSubArrayLen = (target, nums) => {
  let res = Number.MAX_SAFE_INTEGER;
  let low = 0;
  let sum = 0;
  const len = nums.length;
  for (high = 0; high < len; high++) {
    sum += nums[high];
    while (low <= high && sum >= target) {
      const curLen = high - low + 1;
      res = Math.min(res, curLen);
      sum -= nums[low];
      low++;
    }
  }
  if (res === Number.MAX_SAFE_INTEGER) return 0;
  return res;
};

const min = minSubArrayLen(11, [1, 2, 3, 4, 5]);

console.log(min);
