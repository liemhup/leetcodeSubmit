/**
 * Given the roots of two binary trees p and q,
 *  write a function to check if they are the same or not.

Two binary trees are considered the same if they
 are structurally identical, and the nodes have the same value.

 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if ((p && !q) || (q && !p)) return false;
  if (p.val != q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const p = new TreeNode(1, new TreeNode(1));
const q = new TreeNode(1, new TreeNode(2, new TreeNode(3)), new TreeNode(4));
// const q = new TreeNode(1, new TreeNode(1), new TreeNode(3, new TreeNode(4)));
// const p = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4)));

// inOrderTraversal(p);
console.log(isSameTree(p, q));
