/**
 * Medium
 * Given the root of a binary search tree,
 * and an integer k, return the kth smallest
 *  value (1-indexed) of all the values of the
 *  nodes in the tree.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  //   let count = 0;
  //   let res;
  let inOrder = [];
  const helper = (node) => {
    if (!node || count > k) return;
    helper(node.left);
    inOrder.push(node.val);
    // inOrder.push(node.val);
    helper(node.right);
  };

  helper(root);
  return res;
};
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
const root = new TreeNode(
  3,
  new TreeNode(1, null, new TreeNode(2)),
  new TreeNode(4)
);

console.log(kthSmallest(root, 2));
