/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = -Infinity;
  //time limit exceeded
  //   for (i = 0; i < prices.length; i++) {
  //     for (j = i + 1; j < prices.length; j++) {
  //       maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
  //     }
  //   }

  // two pointer
  let i = 0;
  let j = 1;
  let profit;
  while (j < prices.length) {
    profit = prices[j] - prices[i];
    if (profit <= 0) {
      i = j;
    } else maxProfit = Math.max(maxProfit, profit);
    j++;
  }
  return Math.max(maxProfit, 0);
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
