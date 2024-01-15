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

// bfs traverse => parent index left = 2 *index +1, right = 2*index+2

class CBTInserter {
  constructor(root) {
    this.queue = [];
    this.bfs(root);
    // this.root = this.reconstruct(0);
    this.root = root;
  }
  bfs(node) {
    const queue = [node];
    while (queue.length > 0) {
      const node = queue.shift();
      if (node) {
        this.queue.push(node);
        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }
  insert(val) {
    let newNode = new TreeNode(val);
    this.queue.push(newNode);
    let index = this.queue.length - 1;
    let parent;
    if (index % 2 == 1) {
      parent = (index - 1) / 2;
      this.queue[parent].left = newNode;
    } else {
      parent = index / 2 - 1;
      this.queue[parent].right = newNode;
    }
    return this.queue[parent].val;
  }

  get_root() {
    return this.root;
  }
}

let root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6))
);
let cbt = new CBTInserter(root);
console.log(cbt.insert(7));
console.log(cbt.queue);
// console.log(cbt.insert(8));
// console.log(cbt.root);
/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
