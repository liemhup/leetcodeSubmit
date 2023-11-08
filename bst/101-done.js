/**
 * Given the root of a binary tree, check whether it is a mirror
 *  of itself (i.e., symmetric around its center).
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if ((p && !q) || (q && !p)) return false;
    if (p.left.val != q.right.val || p.right.val != q.left.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  };
  var invertTree = function (root) {
    const helper = (node) => {
      if (!node) return;
      helper(node.left);
      helper(node.right);
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
    };
    helper(root);
    return root;
  };
  return isSameTree(root.left, invertTree(root.right));
};
