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

var RandomizedSet = function () {
  this.data = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.includes(val)) return false;
  this.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.includes(val)) return false;
  th.filter((num) => num != val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.random() * (this.length - 1);
  return this[randomIndex];
};
