// You are given an integer money denoting the amount of money (in dollars)
// that you have and another integer children denoting the number of children
// that you must distribute the money to.

// You have to distribute the money according to the following rules:

//     All money must be distributed.
//     Everyone must receive at least 1 dollar.
//     Nobody receives 4 dollars.

// Return the maximum number of children who may receive exactly 8 dollars
//  if you distribute the money according to the aforementioned rules.
//  If there is no way to distribute the money, return -1.

/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
  if (money < children) return -1;
  if (money == children) return 0;
  let res = Math.min(Math.floor((money - children) / 7));
  if (res == children - 1 && res * 8 === money - 4) res--;
  if (res == children && res * 8 != money) res--;
  return res;
};

const money = 17;
const children = 2;
console.log(distMoney(money, children));
