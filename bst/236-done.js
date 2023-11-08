/**
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: 
“The lowest common ancestor is defined between two nodes p 
and q as the lowest node in T that has both p and q as descendants
 (where we allow a node to be a descendant of itself).”
 Constraints:

The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the tree.
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
var lowestCommonAncestor = function (root, p, q) {
  function findNode(root, target) {
    if (root === null) {
      return null;
    }

    if (root.val === target) {
      return "";
    }

    const leftResult = findNode(root.left, target);
    if (leftResult !== null) {
      return "L" + leftResult;
    }

    const rightResult = findNode(root.right, target);
    if (rightResult !== null) {
      return "R" + rightResult;
    }

    return null;
  }
  const qPath = findNode(root, q.val);
  const pPath = findNode(root, p.val);
  console.log(qPath, pPath);
  let Apath = "";
  for (i = 0; i < Math.min(qPath.length, pPath.length); i++) {
    if (qPath[i] != pPath[i]) {      
      break;
    }
    Apath = Apath + qPath[i];
  }
  if (!Apath) return root;
  let res = root;
  for (j = 0; j < Apath.length; j++) {
    res = Apath[j] == "R" ? res.right : res.left;
  }
  return res;
};

[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
const root = new TreeNode(
  3,
  new TreeNode(
    5,
    new TreeNode(6),
    new TreeNode(2, new TreeNode(7), new TreeNode(4))
  ),
  new TreeNode(1, new TreeNode(0), new TreeNode(8))
);

const p = new TreeNode(
  5,
  new TreeNode(6),
  new TreeNode(2, new TreeNode(7), new TreeNode(4))
);
const q = new TreeNode(4);

const Anc = lowestCommonAncestor(root, p, q);
console.log("LCA", Anc);
