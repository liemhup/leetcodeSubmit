/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const length = nums.length;
  k = k % length;
  let l = 0;
  let r = length - 1;
  function temporarySwap(array, left, right) {
    var length = array.length;
    for (left; right, left < right; left += 1, right -= 1) {
      var temporary = array[left];
      array[left] = array[right];
      array[right] = temporary;
    }
    return array;
  }
  temporarySwap(nums, l, r);
  temporarySwap(nums, 0, k - 1);
  temporarySwap(nums, k, r);
};

const nums = [0, 1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);

console.log(nums);

// [0,1,2,3,4,5,6,7]
// [5,6,7,1,2,3,4]
