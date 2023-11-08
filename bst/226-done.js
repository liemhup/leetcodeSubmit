/**
 * Given the root of a binary tree, invert the tree, and return its root.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
var invertTree = function (root) {
  const helper = (node) => {
    if (!node) return;
    helper(node.left);
    helper(node.right);
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
  };
  helper(root);
  return root;
};
const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)), new TreeNode(4));

console.log(invertTree(root))