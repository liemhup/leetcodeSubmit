// // Implement the RandomizedSet class:

// // RandomizedSet() Initializes the RandomizedSet object.
// // bool insert(int val) Inserts an item val into the set
// if not present.Returns true if the item was not present, false otherwise.
// // bool remove(int val) Removes an item val from the set
// if present.Returns true if the item was present, false otherwise.
//     // int getRandom() Returns a random element from the current set of
//     elements(it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// // You must implement the functions of the class such that each
// function works in average O(1) time complexity.

class RandomizedSet {
  constructor() {
    this.data = [];
    this.map = new Map();
  }

  insert(val) {
    if (this.map.has(val)) {
      return false;
    }
    this.data.push(val);
    this.map.set(val, this.data.length - 1);
    return true;
  }

  remove(val) {
    if (!this.map.has(val)) return false;
    const index = this.map.get(val);
    this.data[index] = this.data[this.data.length - 1];
    this.data.pop();
    this.map.delete(val);
    this.map.set(this.data[index], index);
    return true;
  }

  getRandom() {
    return this.data[Math.floor(Math.random() * this.data.length)];
  }
}
