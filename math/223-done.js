/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
// Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.

// The first rectangle is defined by its bottom-left corner (ax1, ay1) and its top-right corner (ax2, ay2).

// The second rectangle is defined by its bottom-left corner (bx1, by1) and its top-right corner (bx2, by2).
/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const maxStart1 = Math.max(ax1, bx1);
  const minEnd1 = Math.min(ax2, bx2);

  const width = maxStart1 - minEnd1;

  const minStart2 = Math.min(ay2, by2);
  const maxEnd2 = Math.max(ay1, by1);

  const height = minStart2 - maxEnd2;

  let overLapArea = 0;

  if (width > 0 && height > 0) {
    overLapArea = width * height;
  }
  const rectArea1 = calculateArea(ax1, ay1, ax2, ay2);
  const rectArea2 = calculateArea(bx1, by1, bx2, by2);

  return rectArea1 + rectArea2 - overLapArea;
};

function calculateArea(x1, y1, x2, y2) {
  const width = Math.abs(x1 - x2);
  const height = Math.abs(y1 - y2);
  return width * height;
}

const ax1 = -3;
const ay1 = 0;
const ax2 = 3;
const ay2 = 4;
const bx1 = 0;
const by1 = -1;
const bx2 = 9;
const by2 = 2;
const Area = computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2);
console.log(Area);
