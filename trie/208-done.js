// A trie(pronounced as "try") or prefix tree is a tree data structure used to efficiently
// store and retrieve keys in a dataset of strings.There are various applications of
// this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is
//     in the trie(i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a
// previously inserted string word that has the prefix prefix, and false otherwise.

// class TreeNode {
//   constructor() {
//     this.key = new Map();
//     this.end = false;
//     this.setEnd = () => {
//       this.end = true;
//     };
//   }
// }
// class Trie {
//   constructor() {
//     this.root = new TreeNode();
//   }
//   insert(word, node = this.root) {
//     if (word.length == 0) {
//       node.setEnd();
//       return;
//     }
//     if (!node.key.has(word[0])) {
//       node.key.set(word[0], new TreeNode());
//     }
//     return this.insert(word.substring(1), node.key.get(word[0]));
//   }

//   search(word, node = this.root) {
//     if (word.length == 0 && node.end) {
//       return true;
//     }
//     if (!node.key.has(word[0])) {
//       return false;
//     }
//     return this.search(word.substring(1), node.key.get(word[0]));
//   }

//   startsWith(prefix, node = this.root) {
//     if (prefix.length == 0) {
//       return true;
//     }
//     if (!node.key.has(prefix[0])) {
//       return false;
//     }
//     return this.startsWith(prefix.substring(1), node.key.get(prefix[0]));
//   }
// }

// Chat gpt solotion

class TreeNode {
  constructor() {
    this.key = new Array(26); // Use an array instead of a Map
    this.end = false;
    this.setEnd = () => {
      this.end = true;
    };
  }
}

class Trie {
  constructor() {
    this.root = new TreeNode();
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - "a".charCodeAt(0);
      if (!node.key[index]) {
        node.key[index] = new TreeNode();
      }
      node = node.key[index];
    }
    node.setEnd();
  }

  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - "a".charCodeAt(0);
      if (!node.key[index]) {
        return false;
      }
      node = node.key[index];
    }
    return node.end;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const index = prefix.charCodeAt(i) - "a".charCodeAt(0);
      if (!node.key[index]) {
        return false;
      }
      node = node.key[index];
    }
    return true;
  }
}

var obj = new Trie();
obj.insert("abcd");
console.log(obj.search("ac"));
console.log(obj.startsWith("ab"));
