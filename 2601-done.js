// You are given a 0-indexed integer array nums of length n.

// You can perform the following operation as many times as you want:

//     Pick an index i that you haven’t picked before, and pick a prime p strictly less than nums[i],
//     then subtract p from nums[i].

// Return true if you can make nums a strictly increasing array using the above operation and false otherwise.

// A strictly increasing array is an array whose each element is strictly greater than its preceding element.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function (nums) {
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }

  function findClosestPrimeSmallerThan(num) {
    for (let i = num - 1; i > 1; i--) {
      if (isPrime(i)) {
        return i;
      }
    }
    return null; // No prime found
  }

  nums[0] = nums[0] - findClosestPrimeSmallerThan(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1] + 1) continue;
    const primeP = findClosestPrimeSmallerThan(nums[i] - nums[i - 1]);
    if (!primeP && nums[i] <= nums[i - 1]) return false;
    nums[i] -= primeP;
  }
  return true;
  // Usage
};

const nums = [5, 16, 14, 9];

console.log(primeSubOperation(nums));
