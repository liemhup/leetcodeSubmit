/**
 * Given an integer array nums where the elements
 *  are sorted in ascending order, convert it to a 
height-balanced
 binary search tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
var sortedArrayToBST = function (nums) {
  const leftIdx =
    nums.length % 2 == 0 ? nums.length / 2 : (nums.length - 1) / 2;
  if (nums.length === 0) {
    return;
  }
  if (nums.length === 3) {
    return new TreeNode(nums[1], new TreeNode(nums[0]), new TreeNode(nums[2]));
  }
  if (nums.length == 2) {
    return new TreeNode(nums[1], new TreeNode(nums[0]));
  }
  nums;
  if (nums.length == 1) {
    return new TreeNode(nums[0]);
  }
  return new TreeNode(
    nums[leftIdx],
    sortedArrayToBST(nums.slice(0, leftIdx)),
    sortedArrayToBST(nums.slice(leftIdx + 1))
  );
};

const nums = [-10, -3, 0, 5, 9];

console.log(sortedArrayToBST(nums));
