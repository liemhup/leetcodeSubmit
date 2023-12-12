/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  const res = {};
  //
  for (let i = 0; i < this.length; i++) {
    if (!res[fn(this[i])]) {
      res[fn(this[i])] = [];
    }
    res[fn(this[i])].push(this[i]);
  }

  return res;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

array = [{ id: "1" }, { id: "1" }, { id: "2" }];

grouped = array.groupBy((item) => item.id);
console.log(grouped);
