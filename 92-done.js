/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const reverseLinkedList = (head, m, n) => {
  let count = 1;
  let dummy = new ListNode(0);
  dummy.next = head;
  let cur = head;
  let prev = dummy;
  while (count < m) {
    prev = cur;
    cur = cur.next;
    count++;
  }
  let tail = cur;
  let next;
  let newHead;
  while (count <= n) {
    count++;
    next = cur.next;
    cur.next = newHead;
    newHead = cur; // newHead === cur.prev, at the end, newHead is the n-node
    cur = next;
  }
  prev.next = newHead;
  tail.next = cur;

  return dummy.next;
};

const first = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
let cur = reverseLinkedList(first, 2, 4);
while (cur) {
  console.log(cur.val);
  cur = cur.next;
}
