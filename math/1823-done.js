/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// There are n friends that are playing a game.The friends are sitting in a circle and are
//  numbered from 1 to n in clockwise order.More formally, moving clockwise from the ith
//  friend brings you to the(i + 1)th friend for 1 <= i < n, and moving clockwise from the nth friend brings you to the 1st friend.

// The rules of the game are as follows:

// Start at the 1st friend.
// Count the next k friends in the clockwise direction including the friend you started at. The counting wraps around the circle and may count some friends more than once.
// The last friend you counted leaves the circle and loses the game.
// If there is still more than one friend in the circle, go back to step 2 starting from the friend immediately clockwise of the friend who just lost and repeat.
// Else, the last friend in the circle wins the game.
// Given the number of friends, n, and an integer k, return the winner of the game.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var findTheWinner = function (n, k) {
  let head = new ListNode(1);
  let cur = head;
  for (let i = 2; i < n + 1; i++) {
    let newNode = new ListNode(i);
    cur.next = newNode;
    cur = cur.next;
  }
  cur.next = head;
  let prev = cur;
  cur = head;
  while (cur.next.next != cur) {
    for (let i = 0; i < k - 1; i++) {
      prev = cur;
      cur = cur.next;
    }
    prev.next = cur.next;
    cur = prev.next;
  }
  return k % 2 == 0 ? cur.val : cur.next.val;
};
// cham hon su dung array.splice

const winner = findTheWinner(5, 2);
console.log(winner);
