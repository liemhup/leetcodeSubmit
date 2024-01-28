// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  arr = s.split("");
  const set = new Set();
  set.add("a");
  set.add("e");
  set.add("i");
  set.add("u");
  set.add("o");
  set.add("A");
  set.add("E");
  set.add("I");
  set.add("O");
  set.add("U");
  let vowels = arr.filter((c) => set.has(c));
  vowels.reverse();
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      arr[i] = vowels[j];
      j++;
    }
  }
  return arr.join("");
};

let s = "hello";
console.log(reverseVowels(s));
