/**
 * Given an m x n 2D binary grid grid which represents
 *  a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting
 adjacent lands horizontally or vertically. You may assume all
  four edges of the grid are all surrounded by water.

    1. Duyệt qua toàn bộ các phần tử
    2. Nếu gặp '1' thì count++, gọi helper để xóa hòn đảo đó bằng
    cách thay tất cả các ô '1' cùng hòn đảo thành 0 => ko bị đếm lặp
    

 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  const callDFS = (grid, i, j) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] == "0"
    )
      return;

    grid[i][j] = "0";
    callDFS(grid, i - 1, j);
    callDFS(grid, i, j - 1);
    callDFS(grid, i + 1, j);
    callDFS(grid, i, j + 1);
  };
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == "1") {
        count++;
        callDFS(grid, i, j);
      }
    }
  }
  //   console.log(count);
  return count;
};
const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "1"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "1", "0"],
  ["0", "0", "1", "0", "1"],
  ["0", "0", "1", "1", "0"],
];

numIslands(grid);
