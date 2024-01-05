// You have n  tiles, where each tile has one letter tiles[i] printed on it.

// Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

/**
 * @param {string} tiles
 * @return {number}
 */

//chat gpt  version
var numTilePossibilities = function (tiles) {
  let count = new Set();

  const backtrack = (path, used) => {
    if (path.length > 0) {
      count.add(path.join("")); // Add the non-empty sequence to a set to ensure uniqueness
    }
    for (let i = 0; i < tiles.length; i++) {
      if (used[i]) continue; // Skip used tiles
      path.push(tiles[i]);
      used[i] = true;
      backtrack(path, used);
      path.pop(); // Backtrack by removing the last tile
      used[i] = false;
    }
  };

  backtrack([], []);
  return count.size; // Return the size of the set to get the count of unique non-empty sequences
};
/**
 * @param {string} tiles
 * @return {number}
 */
//top version
var numTilePossibilities2 = function (tiles) {
  let freq = Array(26).fill(0);
  let count = 0;
  for (tile of tiles) {
    freq[tile.charCodeAt(0) - "A".charCodeAt(0)]++;
  }
  function backtrack() {
    for (let i = 0; i < 26; i++) {
      if (freq[i] === 0) continue;
      count++;
      freq[i]--;
      backtrack();
      freq[i]++;
    }
  }
  backtrack();
  return count;
};
tiles = "AAABBC";
let startTime = performance.now();
console.log(numTilePossibilities(tiles));
let endTime = performance.now();
console.log("Time taken: " + (endTime - startTime) + " milliseconds");
let startTime1 = performance.now();
console.log(numTilePossibilities2(tiles));
let endTime1 = performance.now();
console.log("Time taken: " + (endTime1 - startTime1) + " milliseconds");
