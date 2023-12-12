// Given an integer array nums, return all
// the triplets[nums[i], nums[j], nums[k]] such that
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  let lastIndex = 0;
  const twoSum = (index, nums, target) => {
    let j = nums.length - 1;
    index++;
    while (index < j) {
      if (nums[index] + nums[j] === target) {
        res.push([-target, nums[index], nums[j]]);
        while (nums[index] === nums[index + 1]) index++;
        while (nums[j] === nums[j - 1]) j--;
        index++;
        j--;
      } else if (nums[index] + nums[j] < target) {
        index++;
      } else {
        j--;
      }
    }
  };

  while (lastIndex <= nums.length - 3) {
    if (lastIndex > 0 && nums[lastIndex] === nums[lastIndex - 1]) {
      lastIndex++;
      continue;
    }
    twoSum(lastIndex, nums, -nums[lastIndex]);
    lastIndex++;
  }
  return res;
};
nums = [0, 0, 0, 0];
threeSum(nums);
