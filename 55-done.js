/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const helper = (index) => {
    if (index === 0) return true;
    let idx;
    for (i = index - 1; i >= 0; i--) {
      if (nums[i] + i >= index) {
        idx = i;
        return helper(idx);
      }
      if (i === 0) return false;
    }
  };
  return helper(nums.length - 1);
};

// console.log(canJump([2, 3, 1, 1, 4]));

console.log("ex2: ", canJump([3, 2, 1, 0, 4]));
