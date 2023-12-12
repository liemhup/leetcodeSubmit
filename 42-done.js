// Given n non - negative integers representing an
// elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map(black section)
//  is represented by array[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1].
// In this case, 6 units of rain water(blue section)
// are being trapped.

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  //wrong approch
  //   const peaks = [];
  //   if (height[0] > height[1]) peaks.push(0);
  //   for (i = 1; i < height.length - 1; i++) {
  //     if (height[i] > height[i + 1] && height[i - 1] < height[i]) {
  //       peaks.push(i);
  //     }
  //   }
  //   if (height[height.length - 1] > height[height.length - 2])
  //     peaks.push(height.length - 1);
  //   let trapedWater = 0;
  //   let index = 1;
  //   while (index < peaks.length) {
  //     const lowerPeak = Math.min(height[peaks[index - 1]], height[peaks[index]]);
  //     for (i = peaks[index - 1] + 1; i < peaks[index]; i++) {
  //       if (lowerPeak - height[i] > 0) trapedWater += lowerPeak - height[i];
  //     }
  //     index++;
  //   }
  //   return trapedWater;
  let i = 0;
  let j = height.length - 1;
  let lastHeight = 0;
  let area = 0;
  while (i < j+1) {
    
    const tempMin = Math.min(height[i], height[j]);
    if (tempMin > lastHeight) {
      area +=
        Math.min(height[i] - lastHeight, height[j] - lastHeight) * (j - i + 1);
      lastHeight = Math.max(lastHeight, tempMin);
      console.log(i,j)
    }
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  height.forEach((bar) => {
    area -= bar;
  });
  return area;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const trapped = trap(height);

console.log(trapped);
