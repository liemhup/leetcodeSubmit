/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let index;
  switch (ruleKey) {
    case "type":
      index = 0;
      break;
    case "color":
      index = 1;
      break;
    default:
      index = 2;
  }
  console.log(index);
  let res = 0;
  items.forEach((item) => {
    if (item[index] == ruleValue) res++;
  });
  return res;
};
