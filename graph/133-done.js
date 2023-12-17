/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

// Test case format:
// For simplicity, each node's value is the same as the node's index (1-indexed).
// For example, the first node with val == 1, the second node with val == 2, and so on.
// The graph is represented in the test case using an adjacency list.
// An adjacency list is a collection of unordered lists used to represent a finite graph.
// Each list describes the set of neighbors of a node in the graph.
// The given node will always be the first node with val = 1.
//  You must return the copy of the given node as a reference to the cloned graph.
// Definition for a Node.
class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return;
  let visited = new Set();
  let created = new Map();
  const val = node.val;
  const rootNode = new Node(val);
  created.set(rootNode.val, rootNode);
  const DFS = (node) => {
    if (visited.has(node.val)) return;
    visited.add(node.val);
    let newNode;
    if (created.has(node.val)) {
      newNode = created.get(node.val);
    } else {
      newNode = new Node(node.val);
      created.set(newNode.val, newNode);
    }
    for (let neighbor of node.neighbors) {
      let neiNode;
      if (created.has(neighbor.val)) {
        neiNode = created.get(neighbor.val);
      } else {
        neiNode = new Node(neighbor.val);
        created.set(neighbor.val, neiNode);
      }
      newNode.neighbors.push(neiNode);
      DFS(neighbor);
    }
  };
  DFS(node);
  return rootNode;
};

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors.push(node2);
node2.neighbors.push(node3);
node3.neighbors.push(node4);
node4.neighbors.push(node1);

const cloned = cloneGraph(node1);
console.log(cloned);
