/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0;
  let j = 0;
  const helper = (index) => {
    if (index >= nums.length - 1) return;
    j++;
    let maxIndex = nums[index] + index;
    let nextIndex = maxIndex;
    if (maxIndex >= nums.length - 1) {
      //   j--;
      return;
    }
    for (i = index + 1; i < nums[index] + index + 1; i++) {
      if (nums[i] + i > maxIndex) {
        nextIndex = i;
        maxIndex = nums[i] + i;
      }
    }
    return helper(nextIndex);
  };
  helper(0);
  return j;
};

const steps = jump([3, 4, 3, 2, 5, 4, 3]);
console.log(steps);
