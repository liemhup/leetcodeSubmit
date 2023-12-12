/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = {};
  const length = nums.length;
  for (const i in nums) {
    count[nums[i]] = count[nums[i]] ? count[nums[i]] + 1 : 1;
  }
  for (const num in count) {
    if (count[num] >= nums.length / 2) return num;
  }
};

const res = majorityElement([1, 2, 22, 3, 1, 2, 2, 2, 1, 1, 1, 1, 2]);

console.log(res);
