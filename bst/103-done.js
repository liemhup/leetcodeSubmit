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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
    let res = [];
  const helper = (node, h) => {
    if (!node) return;
    if (!res[h]) res[h] = [];

    if (h % 2 == 0) {
      res[h].push(node.val);
    } else res[h].unshift(node.val);
    if (node.left) helper(node.left, h + 1);
    if (node.right) helper(node.right, h + 1);
  };
  helper(root, 0);
  //   console.log(res);
  return res;
};
const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4)));
