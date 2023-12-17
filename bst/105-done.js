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
  const helper = (rootIndex, startIdx, endIdx) => {
    let root = new TreeNode(preorder[rootIndex]);
    if (startIdx == endIdx) return root;
    const inorderRootIndex = inorder.indexOf(root.val);
    if (inorderRootIndex > startIdx) {
      root.left = helper(rootIndex + 1, startIdx, inorderRootIndex - 1);
    }
    if (inorderRootIndex < endIdx) {
      root.right = helper(
        rootIndex + inorderRootIndex - startIdx + 1,
        inorderRootIndex + 1,
        endIdx
      );
    }
    return root;
  };
  return helper(0, 0, inorder.length - 1);
};

let preorder = [3, 1, 2, 4];
let inorder = [1, 2, 3, 4];

const root = buildTree(preorder, inorder);
console.log(root);
//                    3
//                9
