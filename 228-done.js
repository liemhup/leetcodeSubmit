/**
 * Easy 
 * 
 * @param {number[]} nums
 * @return {string[]}
 * 
 * You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b

 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];
  const res = [];
  let start = nums[0];
  let end = 0;
  for (i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      end = nums[i - 1];
      if (start === end) {
        res.push(start.toString());
      } else res.push(start.toString() + "->" + end.toString());
    }
    if (nums[i] > nums[i - 1] + 1) {
      end = nums[i - 1];
      if (start === end) {
        res.push(start.toString());
      } else res.push(start.toString() + "->" + end.toString());
      start = nums[i];
    }
  }
  if (start === nums[nums.length - 1]) {
    res.push(start.toString());
  } else {
    res.push(start.toString() + "->" + nums[nums.length - 1].toString());
  }
  return res;
};

const nums = [0, 2, 3, 4, 6, 8, 9];
console.log(summaryRanges(nums));
