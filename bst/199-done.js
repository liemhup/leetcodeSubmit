/**
 * Given the root of a binary tree,
 *  imagine yourself standing on the right side of it,
 *  return the values of the nodes you
 *  can see ordered from top to bottom.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 
var rightSideView = function (root) {
  if (!root) return [];
  let res = [];

  function pre(node, h) {
    if (!node) return;
    // node on the most right will replace the res at h depth
    res[h] = node.val;
    pre(node.left, h + 1);
    pre(node.right, h + 1);
  }
  pre(root, 0);
  return res;
};
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)), new TreeNode(4));

console.log(rightSideView(root));
