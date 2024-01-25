// You are given an integer array nums of length n where nums is a
//  permutation of the numbers in the range [0, n - 1].

// You should build a set s[k] = {nums[k], nums[nums[k]],
//      nums[nums[nums[k]]], ... } subjected to the following rule:

// The first element in s[k] starts with the selection of the element
// nums[k] of index = k.
// The next element in s[k] should be nums[nums[k]], and then nums[nums[nums[k]]], and so on.
// We stop adding right before a duplicate element occurs in s[k].
// Return the longest length of a set s[k].
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  let length = 0;
  let count = 0;
  let visited = new Array(nums.length).fill(false);
  let helper = (index) => {
    if (visited[index]) {
      length = Math.max(count, length);
      count = 0;
      return;
    }
    visited[index] = true;
    count++;
    helper(nums[index]);
  };
  for (let i = 0; i < nums.length; i++) {
    helper(i);
  }
  return length;
};

let nums = [5, 4, 0, 3, 1, 6, 2];
console.log(arrayNesting(nums));
