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
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next ? next : null;
  }
}
class BSTIterator {
  constructor(root) {
    let head = new Node(Number.MIN_SAFE_INTEGER);
    let cur = head;
    function traverse(node) {
      if (node === null) {
        return;
      }

      traverse(node.left);
      cur.next = new Node(node.val);
      cur = cur.next;
      traverse(node.right);
    }
    traverse(root);
    this.iterator = head;
    // this.pointer = head;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  this.iterator = this.iterator.next;
  return this.iterator.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return !!this.iterator.next;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

const BSTIteratorInit = new BSTIterator(root);
console.log(BSTIteratorInit.iterator);
console.log(BSTIteratorInit.next());
console.log(BSTIteratorInit.next());
