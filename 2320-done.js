// There is a street with n * 2 plots, where there are n plots on each side of the street.
//  The plots on each side are numbered from 1 to n. On each plot, a house can be placed.

// Return the number of ways houses can be placed such that no two houses are adjacent to
// each other on the same side of the street. Since the answer may be very large, return it modulo 109 + 7.

// Note that if a house is placed on the ith plot on one side of the street,
// a house can also be placed on the ith plot on the other side of the street.

/**
 * @param {number} n
 * @return {number}
 */
var countHousePlacements = function (n) {
  const mood = BigInt(10 ** 9 + 7);
  let last = BigInt(2);
  let lastLast = BigInt(1);
  let answer = last;
  for (let ind = 2; ind <= n; ind++) {
    answer = (last + lastLast) % mood;
    lastLast = last;
    last = answer;
  }
  return (answer * answer) % mood;
};

let n = 1000;
console.log(countHousePlacements(n));
