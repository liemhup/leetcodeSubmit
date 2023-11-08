/**
 * Given the head of a linked list,
 * return the list after sorting it in ascending order.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head;

  let Middle = findMiddleNode(head);
  let nextToMiddle = Middle.next;
  Middle.next = null;
  let left = sortList(head);
  let right = sortList(nextToMiddle);
  return mergeList(left, right);
};
///
const findMiddleNode = (node) => {
  let cur = node;
  let middle = node;
  while (cur.next && cur.next.next) {
    cur = cur.next.next;
    middle = middle.next;
  }
  return middle;
};
//
const mergeList = (left, right) => {
  let dummy = new ListNode(0);
  let tail = dummy;
  while (left && right) {
    if (left.val <= right.val) {
      tail.next = left;
      left = left.next;
    } else {
      tail.next = right;
      right = right.next;
    }
    tail = tail.next;
  }
  if (!left) {
    tail.next = right;
  }
  if (!right) {
    tail.next = left;
  }
  return dummy.next;
};
const head = new ListNode(
  1,
  new ListNode(4, new ListNode(3, new ListNode(6, new ListNode(0))))
);
console.log("res = ", sortList(head));
