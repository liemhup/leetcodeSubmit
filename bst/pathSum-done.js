// Problem: "Path Sum II"
// Given a binary tree and a sum, find all root - to - leaf
// paths where each path's sum equals the given sum.
// Return a list of all paths.

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(5), new TreeNode(3)),
  new TreeNode(4, new TreeNode(8), new TreeNode(11))
);
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {[[number]]}
 */
const pathSum = (root, sum) => {
  let result = [];
  // phải truyên cả path vào helper
  const helper = (node, path, target) => {
    if (!node) {
      return;
    }
    target -= node.val;
    path.push(node.val);

    if (!node.left && !node.right && target === 0) {
      result.push([...path]);
    }
    helper(node.left, path, target);
    helper(node.right, path, target);
    // khi chạy hết các node bên dưới node này thì pop ra để backtrack
    path.pop();
  };
  helper(root, [], sum);
  return result;
};

pathSum(root, 6);
