// You are given a 0-indexed integer array nums. In one step,
// remove all elements nums[i] where nums[i - 1] > nums[i] for all 0 < i < nums.length.

// Return the number of steps performed until nums becomes a non-decreasing array.

// bài toán có thể trình bày lại thành tính số phần tử lớn nhất về bên phải mà một số có thể ăn (cá lớn nuốt cá bé).
// ví dụ [5,4,3,1] thì 5 ăn 4, 3 ăn 1, 5 ăn 3 nên đáp án là 2.
// vậy ta sẽ loop ngc lại từ dưới lên, tính số 3 có thể ăn.
// tiếp theo vì 4 có thể ăn 3 nên số mà 4 có thể ăn đc bằng max của số 3 ăn đc hoặc ăn 3(tức là bằng 1)

/**
 * @param {number[]} nums
 * @return {number}
 */

var totalSteps = function (nums) {
  let stack = [];
  let dp = new Array(nums.length).fill(0);
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      dp[i] = Math.max(dp[i] + 1, dp[stack[stack.length - 1]]);
      stack.pop();
    }
    stack.push(i);
  }
  console.log(stack);
  console.log(dp);
  let res = dp[0];
  dp.forEach((val) => {
    if (val > res) res = val;
  });

  return res;
};
// let nums = [2, 5, 7];
nums = [5, 6, 3, 4, 3, 1];
// 10 2 3 5 6 11 3
// 10 3 4 5 11
// 10 4 5 11
// 10 5 11
// 10 11

// 5 4 4 7 6 11 5 11
console.log(totalSteps(nums));
