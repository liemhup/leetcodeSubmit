// You are given an integer array coins representing
// coins of different denominations and an integer
// amount representing a total amount of money.

// Return the fewest number of coins that you need
//  to make up that amount.If that amount of money
//  cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number
//  of each kind of coin.
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function (coins, amount) {
//   let dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
//   dp[0] = 0;
//   coins.forEach((coin) => (dp[coin] = 1));
//   const helper = (amount) => {
//     if (amount == 0) return 0;
//     if (amount < 0) return Number.MAX_SAFE_INTEGER;
//     if (amount < coins[0]) {
//       return Number.MAX_SAFE_INTEGER;
//     }
//     if (dp[amount] !== Number.MAX_SAFE_INTEGER) return dp[amount];

//     for (let i = 0; i < coins.length; i++) {
//       dp[amount] = Math.min(1 + helper(amount - coins[i]), dp[amount]);
//     }
//     return dp[amount];
//   };

//   const res = helper(amount);
//   console.log(dp);
//   return res == Number.MAX_SAFE_INTEGER ? -1 : res;
// };

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const NUM_USED_TO_BRING_TO_THE_PREVIOUS_VALUE = 1;

var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  coins = coins.sort((a, b) => a - b);
  // this array is needed in order to add to it
  // the minimum number of coins for the number we can give
  // it is equal to amount (+1) because we want to calculate the
  // amount
  // coins for each number in order
  // in order to use previous coins for a number
  // which we have already calculated
  let minCount = new Array(amount + 1).fill(Infinity);
  // for zero, the number of coins will be zero, since we do not have to give anything away
  minCount[0] = 0;

  // since we want to go through all the numbers and find for each
  // the minimum number of coins we will iterate over them
  for (let num = 1; num <= amount; num++) {
    // for each number, we will try all the coins, since,
    // for example if num = 5 and in coins[coins.length - 1] === 5
    // then the minimum number will be one instead of 1+"

    for (let coin of coins) {
      // there is no point in trying to count the number of coins for
      // a number that is greater than num, since there is no such
      if (coin > num) break;

      // we add one to the previous number,
      // because we calculate the number of coins for numbers IN ORDER
      // so for example: 1 + minCount[0]
      // minCount[0] = 0
      // minCount[1] = minCount[0] + 1
      // 0 -> 1 = 0 + 1

      // if we have already found the answer for the number at the previous iteration of coin
      // num = 5 && coins[i] === 5
      // minCount[5] = 1

      // num = 5 && coins[i] === 1
      // minCount[5] = 1 !== minCount[5] = (1 * 5)
      minCount[num] = Math.min(
        minCount[num],
        NUM_USED_TO_BRING_TO_THE_PREVIOUS_VALUE + minCount[num - coin]
      );

      // in case with coins = [2] and amount = 3
      // on first iteration we will skip 1 by if statement 1 > 2
      // and on second we will check
      // minCount[1] stays Infinity
      // minCount[2] = Math.min(minCount[1], 1 + minCount[1]);
      // minCount[2] = Math.min(Infinity, 1 + Infinity) = Infinity;
    }
  }

  return minCount[amount] === Infinity ? -1 : minCount[amount];
};

console.log(coinChange([2, 5, 10], 11));
