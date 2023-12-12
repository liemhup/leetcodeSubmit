/**
 * Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along 
the longest path from the root node down to the farthest leaf node.
 * Definition for a binary tree node.
 *
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
var maxDepth = function (root) {
  if (!root) return 0;

  const helper = (node) => {
    if (!node) return 0;
    if (!node.right && !node.left) {
      return 1;
    }
    return Math.max(helper(node.left) + 1, helper(node.right) + 1);
  };
  return helper(root);
};

const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4)));
// console.log(tree);
console.log(maxDepth(tree));
