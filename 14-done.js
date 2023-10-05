/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = "";
  const firstStr = strs[0];
  let isMissMatch = false;
  for (i = 0; i < firstStr.length; i++) {
    for (j = 1; j < strs.length; j++) {
      if (firstStr[i] !== strs[j][i]) {
        isMissMatch = true;
        break;
      }
    }
    if (isMissMatch) break;
    res += firstStr[i];
  }
  return res;
};

longestCommonPrefix(["liem", "linh", "lien"]);
