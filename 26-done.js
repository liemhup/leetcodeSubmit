/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  let k = nums.length;
  let i = 0;
  let temp = 0;
  while (i < nums.length) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1); //rat cham do phai update lai index cua cac phan tu
      k++;
    } else i++;
  }
  return k;
};

var removeDuplicates2 = function (nums) {
  
  console.log(set);
  const res = Array.from(new Set(nums));
  nums.unshift(...res);
  console.log(nums);
  return res.length;
};

removeDuplicates2([0, 0, 1, 1, 1, 2, 2]);
