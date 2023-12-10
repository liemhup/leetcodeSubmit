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
 * @param {number} k
 * @return {number}
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
var kthLargestLevelSum = function (root, k) {
  let sums = levelSum(root);
  sums.sort((a, b) => b - a);
  return sums[k-1] || -1;
};

const root = new TreeNode(
  5,
  new TreeNode(
    8,
    new TreeNode(2, new TreeNode(4), new TreeNode(6)),
    new TreeNode(1)
  ),
  new TreeNode(9, new TreeNode(3), new TreeNode(7))
);
var levelSum = function (root) {
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let size = queue.length;
    let sum = 0;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      sum += node.val;

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(sum);
  }

  return result;
};
console.log(kthLargestLevelSum(root,1));
