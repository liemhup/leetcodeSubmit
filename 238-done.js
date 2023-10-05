/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Given an integer array nums, return an array answer such that answer[i]
//  is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit
//     in a 32 - bit integer.

// You must write an algorithm that runs in O(n)
// time and without using the division operation.
var productExceptSelf = function (nums) {
  const numberOfZeros = nums.filter((a) => a === 0).length;
  if (numberOfZeros > 1) {
    return new Array(nums.length).fill(0);
  }
  let product;
  //   const product = nums.reduce((pro, i) => {
  //     return i !== 0 ? pro * i : pro;
  //   });
  for (i = 0; i < nums.length; i++) {
    if (!product && nums[i] !== 0) {
      product = nums[i];
      continue;
    }
    if (product) {
      product = nums[i] === 0 ? product : product * nums[i];
    }
  }
  let answer = [];
  const includesZero = !!numberOfZeros;
  for (i = 0; i < nums.length; i++) {
    if (!includesZero) {
      answer[i] = product / nums[i];
    } else {
      answer[i] = nums[i] !== 0 ? 0 : product;
    }
  }

  return answer;
};

const nums = [0, 2, 3, 4];

const answer = productExceptSelf(nums);

console.log(answer);
