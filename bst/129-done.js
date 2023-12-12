/**
 * You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
Return the total sum of all root-to-leaf numbers. 
Test cases are generated so that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.
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
var sumNumbers = function (root) {
  let adder = [];
  // phải truyên cả path vào helper
  const helper = (node, path) => {
    if (!node) {
      return;
    }
    path.push(node.val);

    if (!node.left && !node.right) {
      adder.push(path.join(""));
    }
    helper(node.left, path);
    helper(node.right, path);
    // khi chạy hết các node bên dưới node này thì pop ra để backtrack
    path.pop();
  };
  helper(root, []);
  const sum = adder.reduce((total, number) => total + Number(number), 0);
  return sum;
};
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));

sumNumbers(root);
