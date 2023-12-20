// You are given an array of variable pairs equations and an array of real numbers values,
//  where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i].
//  Each Ai or Bi is a string that represents a single variable.

// You are also given some queries, where queries[j] = [Cj, Dj]
//  represents the jth query where you must find the answer for Cj / Dj = ?.

// Return the answers to all queries. If a single answer cannot be determined, return -1.0.

// Note: The input is always valid. You may assume that evaluating the queries will not result
//  in division by zero and that there is no contradiction.

// Note: The variables that do not occur in the list of equations are undefined,
// so the answer cannot be determined for them.
class Node {
  constructor(val, neis) {
    this.val = val;
    this.neis =neis? neis: {};
  }
}

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

var calcEquation = function (equations, values, queries) {

  // find path from start to end
  function findPathBFS(startNode, endNode) {
    let queue = [{node: startNode, path: [startNode.val]}];
    let visited = new Set();
    visited.add(startNode.val);
  
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.node.val === endNode.val) {
        return current.path; // Return the path when the end node is found
      }
      for (let nei in current.node.neis) {
        if (!visited.has(nei)) {
          let neiNode = created.get(nei)
          queue.push({node: neiNode, path: [...current.path, nei]});
          visited.add(nei);
        }
      }
    }
    return null; // Return null if no path is found
  }

  //create the graph
  let created = new Map();
  for (let i = 0; i < equations.length; i++) {
    let node1, node2;
    if (created.has(equations[i][0])) {
      node1 = created.get(equations[i][0]);
    } else {
      node1 = new Node(equations[i][0]);
      created.set(equations[i][0], node1);
    }
    if (created.has(equations[i][1])) {
      node2 = created.get(equations[i][1]);
    } else {
      node2 = new Node(equations[i][1]);
      created.set(equations[i][1], node2);
    }
    node1.neis[node2.val] = values[i]
    node2.neis[node1.val] = 1/values[i]
  }

  // queries loop

  let res = []

  for (let query of queries) {
    if (query[0]==query[1] && created.has(query[0])){
      res.push(1.0)
      continue
    }
    let node1,node2
    if (created.has(query[0])){
      node1 = created.get(query[0])
    } else {
      res.push(-1.0)
      continue
    }
    if (created.has(query[1])){
      node2= created.get(query[1])
    } else {
      res.push(-1.0)
      continue
    }  
    let temp = findPathBFS(node1,node2)
    if (!temp) {
      res.push(-1.0)
      continue
    }
    let value =1.0
    for (let i=1;i<temp.length;i++){
      value = value* created.get(temp[i-1]).neis[temp[i]]
    }
    res.push(value)
    
  }
  return res
};


const equations = [["a","b"],["c","d"]]
const values = [1.0,1.0]
const queries = [["a","c"],["b","d"],["b","a"],["d","c"]]

calcEquation(equations, values, queries);
