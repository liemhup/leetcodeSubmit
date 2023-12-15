// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi]
//  represent the start and the end of the ith interval and intervals is sorted in ascending order by starti.
//  You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in
// ascending order by starti and intervals still does not have any overlapping intervals
// (merge overlapping intervals if necessary).

// Return intervals after the insertion.

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

//push => sort => merge

var insert = function (intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  for (let [start, end] of intervals) {
    if (res.length == 0 || start > res[res.length - 1][1]) {
      res.push([start, end]);
    } else {
      res[res.length - 1][1] = Math.max(end, res[res.length - 1][1]);
    }
    console.log(start, end);
  }
  return res;
};

const intervals = [
  [0, 2],
  [3, 9],
];

const newInterval = [6, 8];

// insert(intervals, newInterval);

console.log(insert(intervals, newInterval));
