// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1,
// find all possible paths from node 0 to node n - 1 and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i
// (i.e., there is a directed edge from node i to node graph[i][j]).

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let res = [];
  let path = [0];
  let backtrack = (index, path) => {
    if (index == graph.length - 1) {
      res.push(path.slice()); // Push a copy of the path array
      return;
    }
    graph[index].forEach((node) => {
      path.push(node);
      backtrack(node, path);
      path.pop(); // Remove the last element added for backtracking
    });
  };
  backtrack(0, path);
  //   console.log(res);
  return res;
};

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

//them yeu to visited se lam giam su tinh toan lap lai, giam thoi gian
var allPathsSourceTarget2 = function (graph) {
  const helper = (graph, curr, visited, path, tar) => {
    if (curr === tar) {
      result.push([...path]);
      return; // Add a copy of the path to the result
    } else {
      for (let i = 0; i < graph[curr].length; i++) {
        let edge = graph[curr][i];
        if (!visited[edge]) {
          path.push(edge);
          visited[curr] = true;
          helper(graph, edge, visited, path, tar);
          visited[curr] = false;
          path.pop();
        }
      }
    }
  };

  let visited = Array(graph.length).fill(false);
  let path = [0];
  let result = [];
  helper(graph, 0, visited, path, graph.length - 1);
  return result;
};

graph = [[4, 3, 1], [3, 2, 4], [3], [4], []];

allPathsSourceTarget(graph);
