// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two
// endpoints of the ith line are(i, 0) and(i, height[i]).

// Find two lines that together with the x - axis form a
// container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let tempArea = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    if (height[i] > height[j]) {
      tempArea = height[j] * (j - i);
      j--;
    } else {
      tempArea = height[i] * (j - i);
      i++;
    }
    max = Math.max(max, tempArea);
  }
  return max;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
