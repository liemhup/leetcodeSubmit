/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
// It is a sweltering summer day, and a boy wants to buy some ice cream bars.

// At the store, there are n ice cream bars. You are given an array costs of
// length n, where costs[i] is the price of the ith ice cream bar in coins. The
// boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible.

// Note: The boy can buy the ice cream bars in any order.

// Return the maximum number of ice cream bars the boy can buy with coins coins.

// You must solve the problem by counting sort.
var maxIceCream = function (costs, coins) {
  costs.sort(function (a, b) {
    return a - b;
  });
  let res = 0;
  for (let i = 0; i < costs.length; i++) {
    if (coins >= costs[i]) {
      res++;
      coins -= costs[i];
    } else return res;
  }
  return res;
};

maxIceCream([1, 5, 2, 7, 6, 3, 2, 1], 11);
