/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;
  let count = 0;
  let i = nums.length - 1;
  while (i >= 0) {
    if (nums[i] === nums[i - 1]) {
      k++;
    } else k = 0;
    console.log(i, k);
    if (k > 1) {
      nums[i] = nums[nums.length - 1];
      nums.pop();
      k--;
    }
    i--;
  }
  return nums.length;
};

removeDuplicates([1, 2, 2, 2, 3, 4, 4, 4, 5, 5, 5, 6]);
