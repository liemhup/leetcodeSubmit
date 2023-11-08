// Given an array of integers nums sorted
// in non - decreasing order, find the
// starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let first = findFirst(nums, target); // Find the first occurrence of the target.
  let last = findLast(nums, target); // Find the last occurrence of the target.
  return [first, last]; // Return the result as an array.
};

// Helper function to find the first occurrence of the target.
function findFirst(nums, target) {
  let left = 0; // Initialize the left pointer to the beginning of the array.
  let right = nums.length - 1; // Initialize the right pointer to the end of the array.
  let first = -1; // Initialize the variable to store the first occurrence.

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2); // Calculate the middle index.

    if (nums[mid] === target) {
      first = mid; // Update first occurrence.
      right = mid - 1; // Move the right pointer to the left to search in the left half.
    } else if (nums[mid] < target) {
      left = mid + 1; // If mid element is less than target, move the left pointer to the right.
    } else {
      right = mid - 1; // If mid element is greater than target, move the right pointer to the left.
    }
  }

  return first; // Return the index of the first occurrence.
}

// Helper function to find the last occurrence of the target.
function findLast(nums, target) {
  let left = 0; // Initialize the left pointer to the beginning of the array.
  let right = nums.length - 1; // Initialize the right pointer to the end of the array.
  let last = -1; // Initialize the variable to store the last occurrence.

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2); // Calculate the middle index.

    if (nums[mid] === target) {
      last = mid; // Update last occurrence.
      left = mid + 1; // Move the left pointer to the right to search in the right half.
    } else if (nums[mid] < target) {
      left = mid + 1; // If mid element is less than target, move the left pointer to the right.
    } else {
      right = mid - 1; // If mid element is greater than target, move the right pointer to the left.
    }
  }

  return last; // Return the index of the last occurrence.
}

