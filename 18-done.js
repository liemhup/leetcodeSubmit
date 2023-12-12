/**
 * Given an array nums of n integers, return an array of all the unique quadruplets 
 * [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let two = [];
  let three = [];
  let res = [];
  const twoSum = (indexTwo, target2) => {
    let j = nums.length - 1;
    const last = indexTwo;
    while (indexTwo < j) {
      if (indexTwo > last && nums[indexTwo] == nums[indexTwo - 1]) {
        indexTwo++;
        continue;
      }
      if (nums[indexTwo] + nums[j] > target2) {
        j--;
      } else if (nums[indexTwo] + nums[j] < target2) {
        indexTwo++;
      } else {
        two.push([nums[indexTwo], nums[j]]);
        indexTwo++;
      }
    }
  };
  const threeSum = (index, target3) => {
    for (let k = index; k < nums.length - 2; k++) {
      if (k > index && nums[k] === nums[k - 1]) {
        continue;
      }
      twoSum(k + 1, target3 - nums[k]);
      while (two.length) {
        three.push([nums[k], ...two.pop()]);
      }
    }
  };
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    threeSum(i + 1, target - nums[i]);
    while (three.length) {
      res.push([nums[i], ...three.pop()]);
    }
  }
  return res;
};

console.log(fourSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 4));
