/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || k == 0) return head;
  let len = 0;
  let cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }
  let rotate = k % len;
  cur = head;
  let count = 1;
  while (count < len - rotate) {
    count++;
    cur = cur.next;
  }
  let newHead;
  if (cur.next) {
    newHead = cur.next;
  } else return head;
  cur.next = null;
  cur = newHead;
  while (cur.next) {
    cur = cur.next;
  }
  cur.next = head;
  return newHead;
};

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const head = new ListNode(
  0,
  new ListNode(
    1,
    new ListNode(
      2,
      new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
    )
  )
);

let cur = rotateRight(head, 2);

while (cur) {
  console.log(cur.val);
  cur = cur.next;
}
