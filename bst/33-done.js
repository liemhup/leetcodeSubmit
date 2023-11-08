// There is an integer array nums sorted in ascending
// order(with distinct values).

// Prior to being passed to your function,
// nums is possibly rotated at an unknown
// pivot index k(1 <= k < nums.length) such that
// the resulting array is[nums[k], nums[k + 1],
//  ..., nums[n - 1], nums[0], nums[1], ..., nums[k - 1]](0 - indexed).
//  For example, [0, 1, 2, 4, 5, 6, 7] might be rotated at pivot index
// 3 and become[4, 5, 6, 7, 0, 1, 2].

// Given the array nums after the possible rotation
//  and an integer target, return the index of target
// if it is in nums, or - 1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const n = nums.length;
  if (n == 1) return nums[0] == target ? 0 : -1;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  const rotated = left;
  right = n + rotated - 1;
  // console.log(n, rotated, left, right);
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const mid2 = mid >= n ? mid % n : mid;
    if (nums[mid2] > target) {
      right = mid;
    } else if (nums[mid2] < target) {
      left = mid + 1;
    } else return mid2;
  }
  return nums[left % n] == target ? left % n : -1;
};

console.log(search([3, 1], 3));
