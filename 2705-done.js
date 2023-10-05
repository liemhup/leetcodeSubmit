/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    return obj.filter(Boolean)
  }
  for (let key in obj) {
    if (obj[key] && typeof obj[key] === "object") {
      obj[key] = compactObject(obj[key]);
    } else if (!obj[key]) {
      delete obj[key];
    }
  }
  return obj;
};

console.log(compactObject({ a: null, b: "a" }));
console.log(compactObject([1, 2, 3, 0]));
console.log(compactObject([null, 0, false, 1]));
