/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let i = 0;
  let j = string.length - 1;
  while (i <= j) {
    if (string[i] !== string[j]) return false;
    i++;
    j--;
  }
  return true;
};

const boolean = isPalindrome("A man, a plan, a canal: Panama");

console.log(boolean);
