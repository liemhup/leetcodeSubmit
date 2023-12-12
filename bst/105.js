/**
 * Given two integer arrays preorder and
 * inorder where preorder is the preorder
 *  traversal of a binary tree and inorder
 *  is the inorder traversal of the same tree,
 * construct and return the binary tree.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let root = new TreeNode(preorder[0]);
  const inorderRootIndex = inorder.indexOf(preorder[0]);
  console.log(inorderRootIndex);
  return root;
};

let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];

const root = buildTree(preorder, inorder);

//                    3
//                9
