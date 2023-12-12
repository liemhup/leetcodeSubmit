/**
 * @param {Function} fn
 */
function memoize(fn) {
  const mem = {};
  return function (...args) {
    console.log("mem", !mem[[...args].toString()]);
    if (mem[[...args].toString()] === undefined) {
      const res = fn(...args);
      mem[[...args].toString()] = res;
    }
    return mem[[...args].toString()];
  };
}
let callCount = 0;

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
const memFn = memoize((a, b) => {
  callCount++;
  return a + b;
});
memFn(0, 0);
memFn(0, 0);

console.log(callCount);
