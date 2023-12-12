/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let total = 0;
  for (i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      total += prices[i] - prices[i - 1];
    }
  }
  //two pointer

  return total;
};

console.log(maxProfit([1, 2, 3, 4, 5]));
