/**
 * Given an unsorted array of integers nums,
 *  return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
 * @param {number[]} nums
 * @return {number}
 */
// Khong xai dc neu co so am trong nums
// var longestConsecutive = function (nums) {
//   if (nums.length === 0) return 0;
//   const map = {};
//   let res = 1;
//   let temp = 1;

//   for (i = 0; i < nums.length; i++) {
//     map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
//   }
//   const keys = Object.keys(map);
//   console.log(keys);
//   let index = 1;
//   while (index <= keys.length) {
//     if (index === keys.length) return Math.max(res, temp);
//     if (Number(keys[index]) == Number(keys[index - 1]) + 1) {
//       temp++;
//     } else {
//       res = Math.max(temp, res);
//       temp = 1;
//     }
//     index++;
//   }
//   return res;
// };
// Cham va ton nhieu bo nho
const longestConsecutive = (nums) => {
  if (nums.length === 0) return 0;
  const map = {};
  for (i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
  }
  const keys = Object.keys(map)
    .map((value) => Number(value))
    .sort((a, b) => a - b);
  let res = 1;
  let temp = 1;
  for (i = 1; i < keys.length; i++) {
    if (keys[i] === keys[i - 1] + 1) {
      temp++;
    } else {
      res = Math.max(res, temp);
      temp = 1;
    }
  }
  return Math.max(temp, res);
};

const nums = [100, 4, 200, 1, 3, 2, 0, -1, -2];
console.log(longestConsecutive(nums));
