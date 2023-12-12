//Given an integer array nums, return the maximum possible sum of elements of the array such that it is divisible by three.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
  let sum = nums.reduce((total, num) => total + num);
  if (sum % 3 === 0) return sum;
  let numsSum = 0;
  let singleNum = 0;
  let multiNum = 0;
  nums.sort((a, b) => a - b);
  // console.log(nums);
  for (const num of nums) {
    if ((sum - num) % 3 === 0) {
      singleNum = sum - num;
      break;
    }
  }
  for (const num of nums) {
    // nếu số đó không chia hết cho 3 thì cộng vào
    if (num % 3) numsSum += num;
    console.log(numsSum);
    if ((sum - numsSum) % 3 === 0) {
      multiNum = sum - numsSum;
      break;
    }
  }
  // console.log(singleNum, multiNum);
  return Math.max(singleNum, multiNum);
};

const nums = [2, 19, 6, 16, 5, 10, 7, 4, 11, 6];

console.log(maxSumDivThree(nums));
