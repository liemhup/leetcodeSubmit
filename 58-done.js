/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const splited = s.trim().split(" ");
  console.log(splited);
  return splited[splited.length - 1].length;
};

lengthOfLastWord("fly me to the moon  ");
