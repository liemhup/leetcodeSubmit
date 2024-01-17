// Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task.
// Tasks could be done in any order. Each task is done in one unit of time. For each unit of time,
// the CPU could complete either one task or just be idle.

// However, there is a non-negative integer n that represents the cooldown period between two same tasks
// (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

// Return the least number of units of times that the CPU will take to finish all the given tasks.

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (n == 0) return tasks.length;
  let map = new Map();
  for (let i = 0; i < tasks.length; i++) {
    if (map.has(tasks[i])) {
      map.set(tasks[i], map.get(tasks[i]) + 1);
    } else {
      map.set(tasks[i], 1);
    }
  }
  let count = Array.from(map.values());

  count.sort((a, b) => b - a);
  let k = 1;
  for (let i = 1; i < count.length; i++) {
    if (count[0] == count[i]) {
      k++;
    } else break;
  }
  // (count[0]-1) là số lần lặp lại nhiều nhất
  // n+1 là khoảng cách có thể lặp lại tasks
  // k là số bộ có cùng số lần lặp lại nhiều nhất ví dụ A:3, B:3 thì phải lặp lại bộ AB ở cuối
  return Math.max((count[0] - 1) * (n + 1) + k, tasks.length);
};

const tasks = ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"];
const n = 2;
console.log(leastInterval(tasks, n));
