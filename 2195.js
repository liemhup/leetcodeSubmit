// You are given an integer array nums and an integer k. Append k unique positive integers that do not appear in nums to nums such that the resulting total sum is minimum.

// Return the sum of the k integers appended to nums.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function (nums, k) {
  nums.sort((a, b) => a - b);
  let i = 1;
  let n = 0;
  let res = 0;
  let index = 0;
  let numToCompare = nums[index];
  let bigestNum = nums[nums.length - 1];
  //   console.log('nums', nums);

  while (n < k) {
    if (i > bigestNum) {
      console.log(i);
      res += i;
      i++;
      n++;
      continue;
    }
    if (i < numToCompare) {
      console.log('i', i);
      res += i;
      n++;
      i++;
      continue;
    } else if (i > numToCompare) {
      index++;
      numToCompare = nums[index];
      //   i++;
    } else {
      index++;
      numToCompare = nums[index];
      i++;
    }
  }
  return res;
};

const nums = [
  96, 44, 99, 25, 61, 84, 88, 18, 19, 33, 60, 86, 52, 19, 32, 47, 35, 50, 94,
  17, 29, 98, 22, 21, 72, 100, 40, 84,
];

console.log(minimalKSum(nums, 35));
