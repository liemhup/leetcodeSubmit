/**
 * Given an array nums of distinct integers,
 * return all the possible permutations.
 * You can return the answer in any order.
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const path = [];
  const helper = (path) => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    // the let keyword make i scope variable, without it, i is a globle variable, which mean that
    // you can access it outside the loop
    for (let i = 0; i < nums.length; i++) {
      if (!path.includes(nums[i])) {
        path.push(nums[i]);
        helper(path);
        path.pop();
      }
    }
  };
  helper(path);
  return res;
};

const nums = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(permute(nums));
