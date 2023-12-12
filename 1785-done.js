// You are given an integer array nums and two integers limit and goal. The array nums has an interesting property that abs(nums[i]) <= limit.

// Return the minimum number of elements you need to add to make the sum of the array equal to goal. The array must maintain its property that abs(nums[i]) <= limit.

// Note that abs(x) equals x if x >= 0, and -x otherwise.

/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function (nums, limit, goal) {
  const total = nums.reduce((sum, num) => sum + num);
  const res = Math.trunc((goal - total) / limit);
  const mod = (goal - total) % limit;
  console.log(total);
  console.log(res);
  //   if (limit === 1) return res < 0 ? -res : res;
  if (mod === 0) return res < 0 ? -res : res;
  return res < 0 ? 1 - res : res + 1;
};

console.log(minElements([-4, 0, -3, -3, 0, 0, -2, 2, 0, -2], 4, 940097744));
