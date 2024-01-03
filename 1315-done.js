// Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent.
// If there are no nodes with an even-valued grandparent, return 0.

// A grandparent of a node is the parent of its parent if it exists.
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

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
 * @return {number}
 */
var sumEvenGrandparent = function (root) {
  if (!root) return 0;
  let res = 0;
  let helper = (node, gp) => {
    if (!node) return;
    if (gp.val % 2 == 0) {
      if (node.left) res += node.left.val;
      if (node.right) res += node.right.val;
    }
    helper(node.left, node);
    helper(node.right, node);
  };
  helper(root.left, root);
  helper(root.right, root);
  // console.log(res);
  return res;
};

let root = new TreeNode(
  2,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(5, new TreeNode(6), new TreeNode(7))
);

sumEvenGrandparent(root);

/////             1
//          2           5
//       3   4     6      7
