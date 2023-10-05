/**
 * @param {number[]} citations
 * @return {number}
 */

// Given an array of integers citations where citations[i]
// is the number of citations a researcher received for
// their ith paper, return the researcher's h-index.

// According to the definition of h-index on Wikipedia:
// The h - index is defined as the maximum value of h
// such that the given researcher has published at least h
// papers that have each been cited at least h times.
//
var hIndex = function (citations) {
  const length = citations.length;
  let i = 0;
  let h = 0;
  citations.sort((a, b) => b - a);
  while (i < length) {
    if (citations[i] > i) {
      h++;
    } else break;
    i++;
  }
  return h;
};

const maxH = hIndex([1, 3, 1]);
console.log(maxH);
