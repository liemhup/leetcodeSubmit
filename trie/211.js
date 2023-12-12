// Design a data structure that supports adding new words
// and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data
// structure that matches word or false otherwise.word may contain dots
// '.' where dots can be matched with any letter.
class TreeNode {
  constructor() {
    this.key = {};
    // this.end = false;
    // this.setEnd = () => {
    //   this.end = true;
    // };
  }
}
class WordDictionary {
  constructor() {
    this.root = new TreeNode();
  }
  addWord = function (word, node = this.root) {
    if (word.length == 0) {
      return;
    }
    if (!node.key[word[0]]) {
      node.key[word[0]] = new TreeNode();
    }
    return this.addWord(word.substring(1), node.key[word[0]]);
  };

  search = function (word) {
    if (word == ".") return false;
    const helper = (word, node) => {
      console.log("word:", word, "node:", node);
      if (word.length == 0 || word == ".") return true;
      if (word[0] == ".") {
        for (const key in node.key) {
          if (this.helper(word.substring(2), node.key[key])) return true;
        }
        // return false;
      }

      if (!node || !node.key[word[0]]) return false;
      return helper(word.substring(1), node.key["a"]);
    };
    return helper(word, this.root);
  };

  /**
   * Your WordDictionary object will be instantiated and called as such:
   
   */
}
var obj = new WordDictionary();

obj.addWord("add");
console.log(obj.search("ad."));
console.log("root", obj.root);
