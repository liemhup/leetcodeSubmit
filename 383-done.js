/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  const count = {};
  for (let i = 0; i < magazine.length; i++) {
    count[magazine[i]] = count[magazine[i]] ? count[magazine[i]] + 1 : 1;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (!count[ransomNote[i]]) return false;
    count[ransomNote[i]]--;
  }
  return true;
};
const ransomNote = "abaaaaa";
const magazine = "badaccaa";

const can = canConstruct(ransomNote, magazine);
console.log(can);
