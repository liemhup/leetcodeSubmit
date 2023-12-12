/**
 * A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. 
If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. 
In other words, an element is always considered to be strictly 
greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.
 */

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findPeakElement = function (nums) {
//   if (nums.length == 1 || nums[0] > nums[1]) return 0;
//   if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;
//   for (let i = 1; i < nums.length - 1; i++) {
//     if (nums[i - 1] < nums[i] && nums[i + 1] < nums[i]) return i;
//   }
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    const mid = Math.floor((r + l) / 2);
    if (nums[mid] > nums[mid + 1]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
};

//note: Nếu nums[mid]>núm[mid+1] thì ta sẽ search trong khoảng 0-mid,
//và khoảng này có điều kiện là nums[-1]<nums[0]
//và nums[nums.length - 1] > nums[nums.length - 2] giống hệt với điều kiện ban đầu
//nhưng khoảng tìm kiếm đã bớt đi một nửa. Tiếp tục lặp lại thì cuối cùng ta sẽ đc 1
//số đạt điều kiện lớn hơn cả 2 đầu

console.log(findPeakElement([1, 6, 7, 8, 9, 6, 7, 2]));
