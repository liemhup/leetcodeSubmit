/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      delete nums[i];
    } else {
      k++;
    }
  }
  nums.sort((a, b) => a - b);
  return k;
};

removeElement([2, 3, 4, 7, 11], 4);
