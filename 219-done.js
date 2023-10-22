/**
 * Easy
 *
 * Given an integer array nums and an integer k,
 * return true if there are two distinct indices
 * i and j in the array such that nums[i] == nums[j]
 * and abs(i - j) <= k.
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const count = {};
  for (i = 0; i <= Math.min(nums.length, k); i++) {
    count[nums[i]] = count[nums[i]] ? count[nums[i]] + 1 : 1;
  }
  console.log(count);
  for (i in count) {
    if (count[i] > 1) return true;
  }
  for (i = 0; i < nums.length - k; i++) {
    count[nums[i]]--;

    if (count[nums[k + i + 1]]) {
      return true;
    } else count[nums[k + i + 1]] = 1;
  }
  return false;
};
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 15;

console.log(containsNearbyDuplicate(nums, k));
