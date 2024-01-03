// Given a list of folders folder, return the folders after removing all sub-folders in those folders.
// You may return the answer in any order.

// If a folder[i] is located within another folder[j],
// it is called a sub-folder of it.

// The format of a path is one or more concatenated strings of the form: '/' followed by one or more lowercase English letters.

// For example, "/leetcode" and "/leetcode/problems" are valid paths while an empty string and "/" are not.
/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  folder.sort();
  let res = [folder[0]];

  for (let i = 0; i < folder.length; i++) {
    if (!isSubfolder(res[res.length - 1], folder[i])) res.push(folder[i]);
  }
  return res;
};
const isSubfolder = (a, b) => {
  if (a.length > b.length) return false;
  if (b[a.length] && b[a.length] !== "/") return false;
  const prefix = b.substring(0, a.length);
  return a == prefix;
};
folder = ["b/c", "/ah/al/am", "/ah/al"];

removeSubfolders(folder);
