// Given the root of a binary tree, split the binary tree into two subtrees by removing
// one edge such that the product of the sums of the subtrees is maximized.

// Return the maximum product of the sums of the two subtrees. Since the answer may be too large, return it modulo 109 + 7.

// Note that you need to maximize the answer before taking the mod and not after taking it.

//  Definition for a binary tree node.
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function (root) {
  let map = new WeakMap();
  function sumTree(node) {
    if (node === null) return 0;
    if (map.has(node)) return map.get(node);
    let res = node.val + sumTree(node.left) + sumTree(node.right);
    map.set(node, res);
    return res;
  }
  const total = sumTree(root);
  let res = 1;
  function inOrderTraversal(node) {
    if (node !== null) {
      inOrderTraversal(node.left);
      let tree;
      if (map.has(node)) {
        tree = map.get(node);
      } else {
        tree = sumTree(node);
        map.set(node, tree);
      }
      res = Math.max(res, (total - tree) * tree);
      inOrderTraversal(node.right);
    }
  }
  inOrderTraversal(root);
  return res % 1000000007;
};

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
//best solution
var maxProduct2 = function (root) {
  let sums = []; // store sums of subtrees

  // Recursively calculate sum of subtree
  const sumTree = (node) => {
    if (!node) return 0;
    let s = node.val + sumTree(node.right) + sumTree(node.left);
    sums.push(s);
    return s;
  };

  let MOD = 1e9 + 7;
  sums = []; // flush sums
  let total = sumTree(root);

  let mx = 0;
  for (let i of sums) {
    mx = Math.max(mx, i * (total - i));
  }

  return mx % MOD;
};
