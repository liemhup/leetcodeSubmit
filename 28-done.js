/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  //   if (!haystack.includes(needle)) return -1;
  return haystack.indexOf(needle);
};

const haystack = "sadbutsad";
const needle = "sadw";

const first = strStr(haystack, needle);

console.log(first);
