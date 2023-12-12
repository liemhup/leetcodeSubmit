// Given an integer array nums and an integer k,
//  return the kth largest element in the array.

// Note that it is the kth largest element in the
//  sorted order, not the kth distinct element.

// Can you solve it without sorting?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // Create a min-heap
  const minHeap = [];

  // Add the first k elements to the min-heap
  for (let i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }
console.log(minHeap)
  // Convert the array into a min-heap
  buildMinHeap(minHeap);

  // Compare remaining elements with the root of the min-heap
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > minHeap[0]) {
      // Remove the root and insert the element into the min-heap
      minHeap[0] = nums[i];
      heapify(minHeap, 0);
    }
  }
  console.log(minHeap);
  // Return the root of the min-heap
  return minHeap[0];
};

// Helper function to build a min-heap
function buildMinHeap(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, i);
  }
}

// Helper function to heapify a subtree rooted at index i
function heapify(arr, i) {
  const n = arr.length;
  let smallest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] < arr[smallest]) {
    smallest = left;
  }

  if (right < n && arr[right] < arr[smallest]) {
    smallest = right;
  }

  if (smallest !== i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    heapify(arr, smallest);
  }
}
console.log(findKthLargest([12, 5, 3, 1, 23, 65, 21, 23], 3));

// Example usage
// const arr = [12, 5, 3, 1, 23, 65, 21, 23];
// buildMinHeap(arr);
// console.log(arr); // Output: [65, 23,
