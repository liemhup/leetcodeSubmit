// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
// You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

//     For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

// Return true if you can finish all courses. Otherwise, return false.
// Constraints:

//     1 <= numCourses <= 2000
//     0 <= prerequisites.length <= 5000
//     prerequisites[i].length == 2
//     0 <= ai, bi < numCourses
//     All the pairs prerequisites[i] are unique.

class Node {
  constructor(val, neis) {
    this.val = val;
    this.neis = neis || [];
  }
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var canFinish = function (numCourses, prerequisites) {
  // let pass = new Array(numCourses).fill(0);
  function isStuck(startNode) {
    // if (pass[startNode.val] == 1) return false;
    let visited = new Set();
    let queue = [...startNode.neis];
    while (queue.length > 0) {
      let current = created.get(queue.shift());
      if (current.val == startNode.val) return true;
      for (let nei of current.neis) {
        if (!visited.has(nei)) {
          queue.push(nei);
          visited.add(nei);
        }
      }
    }
    // for (let val of visited) {
    //   pass[val] = 1;
    // }
    return false;
  }

  const created = new Map();
  for (let i = 0; i < numCourses; i++) {
    created.set(i, new Node(i));
  }
  for (let i = 0; i < prerequisites.length; i++) {
    created
      .get(prerequisites[i][0])
      .neis.push(created.get(prerequisites[i][1]).val);
  }

  console.log(created);
  for (let i = 0; i < numCourses; i++) {
    let start = created.get(i);
    if (isStuck(start)) return false;
  }

  return true;
};

// base on node but dont use node =)) ///way better
var canFinish2 = function (numCourses, prerequisites) {
  let map = {};
  let visited = new Set();

  for (let [a, b] of prerequisites) {
    if (!map[a]) map[a] = [b];
    else map[a].push(b);
  }

  var dfs = function (curr) {
    if (visited.has(curr)) return false;

    visited.add(curr);

    if (map[curr]) {
      for (let neigh of map[curr]) {
        if (!dfs(neigh)) return false;
      }
    }

    visited.delete(curr);
    map[curr] = [];
    return true;
  };

  for (let key in map) {
    if (!dfs(key)) return false;
  }
  return true;
};

prerequisites = [
  [1, 4],
  [3, 1],
  [3, 2],
];
numCourses = 5;

const canWe = canFinish2(numCourses, prerequisites);
console.log(canWe);
