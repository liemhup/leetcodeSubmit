/**
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
// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree
// and postorder is the postorder traversal of the same tree, construct and return the binary tree.
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const helper = (rootIdx, start, end) => {
    const root = new TreeNode(postorder[rootIdx]);
    const inorderRootIdx = inorder.indexOf(root.val);
    if (inorderRootIdx < end) {
      root.right = helper(rootIdx - 1, inorderRootIdx + 1, end);
    }
    if (inorderRootIdx > start) {
      root.left = helper(
        rootIdx - end + inorderRootIdx - 1,
        start,
        inorderRootIdx - 1
      );
    }
    return root;
  };
  return helper(inorder.length - 1, 0, inorder.length - 1);
};

const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];

//           3
//       9        20
//            15         7

console.log(buildTree(inorder, postorder));
