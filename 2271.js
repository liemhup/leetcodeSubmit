// You are given a 2D integer array tiles where tiles[i] = [li, ri]
// represents that every tile j in the range li <= j <= ri is colored white.

// You are also given an integer carpetLen, the length of a single carpet that can be placed anywhere.

// Return the maximum number of white tiles that can be covered by the carpet.

/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */
var maximumWhiteTiles = function (tiles, carpetLen) {
  for (let tile of tiles) {
    if (tile[1] - tile[0] == carpetLen) return carpetLen;
  }
  let start = 1;
};

let tiles = [
  [1, 5],
  [10, 11],
  [12, 18],
  [20, 25],
  [30, 32],
];

let carpetLen = 10;

console.log(maximumWhiteTiles(tiles, carpetLen));
