/**
 * Definition for a binary tree node.
 * Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child 
pointer points to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 *
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function (root) {
  function preorderTraversal(root) {
    let stack = [];
    let rights = [];
    if (root) stack.push(root);

    while (stack.length > 0) {
      let node = stack.pop();
      // Visit the root node
      // Push right child to stack if it exists
      if (node.right) {
        stack.push(node.right);
        rights.push(node.right);
      }
      // Push left child to stack if it exists
      if (node.left) {
        stack.push(node.left);
        node.right = node.left;
      } else {
        let right = rights.pop() || null;
        node.right = right;
      }
      node.left = null;
    }
  }
  preorderTraversal(root);
  console.log(root.right.right.right);
};

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(5, null, new TreeNode(6))
);

const flat = (root, list) => {
  if (root === null) return;

  list.push(root);
  flat(root.left, list);
  flat(root.right, list);
};
//better
//traverse in preorder => push node => loop and modifie children
var flatten2 = function (root) {
  if (root === null) return;
  list = [];

  flat(root, list);

  for (let i = 0; i < list.length - 1; i++) {
    list[i].right = list[i + 1];
    list[i].left = null;
  }
};
