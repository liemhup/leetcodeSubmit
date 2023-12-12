// Definition for a QuadTree node.

// Given a n * n matrix grid of 0's and 1's only. We want to represent grid with a Quad-Tree.

// Return the root of the Quad-Tree representing grid.

// A Quad - Tree is a tree data structure in which each internal
//  node has exactly four children.Besides, each node has two attributes:

// val: True if the node represents a grid of 1's or False if the
//  node represents a grid of 0's. Notice that you can assign the
//   val to True or False when isLeaf is False, and both are accepted in the answer.
// isLeaf: True if the node is a leaf node on the tree or False if the node has four children.
// class Node {
//     public boolean val;
//     public boolean isLeaf;
//     public Node topLeft;
//     public Node topRight;
//     public Node bottomLeft;
//     public Node bottomRight;
// }
// We can construct a Quad-Tree from a two-dimensional area using the following steps:

//     If the current grid has the same value (i.e all 1's or all 0's)
// set isLeaf True and set val to the value of the grid and set the four
// children to Null and stop.
// If the current grid has different values, set isLeaf to False and set val
// to any value and divide the current grid into four sub - grids as shown in the photo.
// Recurse for each of the children with the proper sub-grid.

// If you want to know more about the Quad-Tree, you can refer to the wiki.

// Quad-Tree format:

// You don't need to read this section for solving the problem.
// This is only if you want to understand the output format here.
// The output represents the serialized format of a Quad - Tree using
// level order traversal, where null signifies a path terminator where no node exists below.

// It is very similar to the serialization of the binary tree.
//  The only difference is that the node is represented as a list[isLeaf, val].

// If the value of isLeaf or val is True we represent it as 1 in
//     the list[isLeaf, val] and if the value of isLeaf or val is False we represent it as 0.

// Constraints:

// n == grid.length == grid[i].length
// n == 2 power to x where 0 <= x <= 6
class Node {
  constructor(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
  }
}
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
  const n = grid.length;
  if (isLeaf(grid)) {
    return new Node(grid[0][0], 1, null, null, null, null);
  }
  if (n == 2) {
    return new Node(
      1,
      0,
      new Node(grid[0][0], 1, null, null, null, null),
      new Node(grid[0][1], 1, null, null, null, null),
      new Node(grid[1][0], 1, null, null, null, null),
      new Node(grid[1][1], 1, null, null, null, null)
    );
  }

  const { topLeftGrid, topRightGrid, bottomLeftGrid, bottomRightGrid } =
    subGrid(grid);

  let topLeft = isLeaf(topLeftGrid)
    ? new Node(topLeftGrid[0][0], 1, null, null, null, null)
    : construct(topLeftGrid);

  let topRight = isLeaf(topRightGrid)
    ? new Node(topRightGrid[0][0], 1, null, null, null, null)
    : construct(topRightGrid);

  let bottomLeft = isLeaf(bottomLeftGrid)
    ? new Node(bottomLeftGrid[0][0], 1, null, null, null, null)
    : construct(bottomLeftGrid);

  let bottomRight = isLeaf(bottomRightGrid)
    ? new Node(bottomRightGrid[0][0], 1, null, null, null, null)
    : construct(bottomRightGrid);

  return new Node(0, 0, topLeft, topRight, bottomLeft, bottomRight);
};
const subGrid = (grid) => {
  const n = grid.length;
  const topLeftGrid = grid.slice(0, n / 2).map((row) => {
    return row.slice(0, n / 2);
  });
  const topRightGrid = grid.slice(0, n / 2).map((row) => {
    return row.slice(n / 2);
  });
  const bottomLeftGrid = grid.slice(n / 2).map((row) => {
    return row.slice(0, n / 2);
  });
  const bottomRightGrid = grid.slice(n / 2).map((row) => {
    return row.slice(n / 2);
  });
  return { topLeftGrid, topRightGrid, bottomLeftGrid, bottomRightGrid };
};

let isLeaf = (grid) => {
  let n = grid.length;
  if (n == 1) return true;
  let topLeftVal = grid[0][0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (topLeftVal != grid[i][j]) return false;
    }
  }
  return true;
};
// const grid = [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
// ];
const grid = [
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
];
// console.log(subGrid(grid).topRightGrid);
console.log(construct(grid));
