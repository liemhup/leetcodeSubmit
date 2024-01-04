// You are given an array nums of positive integers and a positive integer k.

// A subset of nums is beautiful if it does not contain two integers with an absolute difference equal to k.

// Return the number of non-empty beautiful subsets of the array nums.

// A subset of nums is an array that can be obtained by deleting some (possibly none) elements from nums.
// Two subsets are different if and only if the chosen indices to delete are different.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
  nums.sort((a, b) => a - b);
  const backtracking = (array) => {
    let n = array.length;
    let res = 0;
    if (n == 0) return 0;

    //duong nhien
    for (let i = 0; i < array.length; i++) {
      //
      let b = [];

      for (let j = i + 1; j < array.length; j++) {
        if (array[j] - array[i] !== k) {
          b.push(array[j]);
        }
      }
      // dat yeu cau => res bang 1 + backtracking tap con
      res += 1 + backtracking(b);
    }
    return res;
  };
  return backtracking(nums);
};

const nums = [2, 4, 6, 8, 10, 12];
const k = 2;

beautifulSubsets(nums, k);

// function backtrack(current, nums, result):
//     if current is a valid solution:
//         add current to result
//         return
//     for each candidate in nums:
//         if candidate is a valid choice:
//             choose candidate
//             backtrack(current + candidate, nums, result)
//             unchoose candidate
