/**
 * Definition for singly-linked list.
 * Given the head of a linked list,
 * remove the nth node from the end of the list
 * and return its head.
 *
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
var removeNthFromEnd = function (head, n) {
  if (head.next == null || !head) return null;
  let len = 0;

  let pos = 0;
  let dummy = new ListNode(0, head);
  let prev = dummy;
  let cur = head;
  while (cur) {
    cur = cur.next;
    len++;
  }
  if (n > len) return head;
  cur = head;
  let next = cur.next;
  while (pos < len - n) {
    prev = cur;
    cur = cur.next;
    next = cur.next;
    pos++;
  } 
  prev.next = next;
  return dummy.next;
};
let head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
let res = removeNthFromEnd(head, 3);

while (res) {
  console.log(res.val);
  res = res.next;
}
