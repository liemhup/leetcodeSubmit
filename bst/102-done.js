/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let res = [];
  const helper = (node, h) => {
    if (!node) return;
    if (!res[h]) res[h] = [];
    res[h].push(node.val);
    if (node.left) helper(node.left, h + 1);
    if (node.right) helper(node.right, h + 1);
  };
  helper(root, 0);
  return res;
};
