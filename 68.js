/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let i = 0;
  let j = 0;
  let res = [];
  let length = 0;
  let lengths = [];
  while (i < words.length) {
    if (res[j] == undefined) {
      res[j] = [words[i]];
      length = words[i].length + 1;
      lengths[j] = words[i].length;
      i++;
      continue;
    }
    if (length + words[i].length <= maxWidth) {
      res[j].push(words[i]);
      length += words[i].length + 1;
      lengths[j] += words[i].length;
      i++;
    } else {
      length = 0;
      j++;
    }
  }
  let output = [];
  for (i = 0; i < res.length - 1; i++) {
    if (res[i].length === 1) {
      output[i] = res[i][0] + " ".repeat(maxWidth - res[i][0].length);
      continue;
    }
    const spaces = res[i].length - 1;
    const spacePerSpace = Math.floor((maxWidth - lengths[i]) / spaces);
    const modSpace = (maxWidth - lengths[i]) % spaces;
    for (j = 0; j < modSpace; j++) {
      res[i][j] += " ";
    }
    output[i] = res[i].join(" ".repeat(spacePerSpace));
  }
  output[res.length - 1] =
    res[res.length - 1].join(" ") +
    " ".repeat(
      maxWidth - lengths[res.length - 1] - res[res.length - 1].length + 1
    );
  console.log(output);
  return output;
};

const words = [
  "Science",
  "is",
  "what",
  "we",
  "understand",
  "well",
  "enough",
  "to",
  "explain",
  "to",
  "a",
  "computer.",
  "Art",
  "is",
  "everything",
  "else",
  "we",
  "do",
];
const maxWidth = 20;

fullJustify(words, maxWidth);
