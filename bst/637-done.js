/**
 * 15:43
 * Given the root of a binary tree,
 *  return the average value of the nodes
 * on each level in the form of an array.
 *  Answers within 10-5 of the actual answer will be accepted.
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
var averageOfLevels = function (root) {
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
  res = res.map((lv) => {
    let total = lv.reduce((acc, n) => acc + n);
    return total / lv.length;
  });
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
  new TreeNode(
    5,
    new TreeNode(6),
    new TreeNode(2, new TreeNode(7), new TreeNode(4))
  ),
  new TreeNode(1, new TreeNode(0), new TreeNode(8))
);

const p = new TreeNode(
  5,
  new TreeNode(6),
  new TreeNode(2, new TreeNode(7), new TreeNode(4))
);

averageOfLevels(root);
