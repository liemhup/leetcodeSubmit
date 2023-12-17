/**
 * // Definition for a Node.
 *
 */
class Node {
  constructor(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}
// Given a binary tree

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node.
// If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  function BFTraverse(root) {
    if (!root) return;

    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
      let levelSize = queue.length;
      for (let i = 0; i < levelSize; i++) {
        let node = queue.shift();
        if (i < levelSize - 1) {
          node.next = queue[0];
        }
        // Process the current node

        // Add left child to queue if it exists
        if (node.left) queue.push(node.left);

        // Add right child to queue if it exists
        if (node.right) queue.push(node.right);
      }
    }
  }
  BFTraverse(root);
  return root;
};

const root = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, null, new Node(7))
);
BFTraverse(root);
