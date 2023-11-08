/**
 * Given the root of a Binary Search Tree (BST),
 *  return the minimum absolute difference between
 *  the values of any two different nodes in the tree.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  if (!root) return 0;
  let res = [];
  let min;
  const helper = (node, h) => {
    if (!node) return;
    res.push(node.val);
    if (node.left) helper(node.left, h + 1);
    if (node.right) helper(node.right, h + 1);
  };
  helper(root, 0);
  res.sort((a, b) => a - b);
  for (i = 1; i < res.length; i++) {
    min = Math.min(res[i] - res[i - 1], min);
  }
  return min;
};
