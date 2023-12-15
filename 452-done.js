/**
 * @param {number[][]} points
 * @return {number}
 */

//There are some spherical balloons taped onto a flat wall
// that represents the XY-plane. The balloons are represented as a
// 2D integer array points where points[i] = [xstart, xend] denotes a
// balloon whose horizontal diameter stretches between xstart and xend.
// You do not know the exact y-coordinates of the balloons.

// Arrows can be shot up directly vertically (in the positive y-direction)
// from different points along the x-axis. A balloon with xstart and xend is
// burst by an arrow shot at x if xstart <= x <= xend. There is no limit to
// the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

// Given the array points, return the minimum number of arrows that must be shot to burst all balloons.
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0]);
  let res = 0;
  const isIntersect = (a, b) => a[1] >= b[0];
  const overlapping = (a, b) => {
    if (isIntersect(a, b)) {
      return [b[0], Math.min(a[1], b[1])];
    }
  };
  let i = 1;
  let temp;
  while (i < points.length) {
    if (!temp) {
      if (isIntersect(points[i - 1], points[i])) {
        temp = overlapping(points[i - 1], points[i]);
      } else {
        res++;
      }
    } else {
      if (isIntersect(temp, points[i])) {
        temp = overlapping(temp, points[i]);
      } else {
        res++;
        temp = undefined;
      }
    }
    i++;
  }
  return res + 1;
};

const points = [
  [3, 9],
  [7, 12],
  [3, 8],
  [6, 8],
  [9, 10],
  [2, 9],
  [0, 9],
  [3, 9],
  [0, 6],
  [2, 8],
];

console.log(findMinArrowShots(points));
