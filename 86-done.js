/**
 * Given the head of a linked list
 *  and a value x, partition it such that 
 * all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of
 the nodes in each of the two partitions.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
var partition = function (head, x) {
  if (!head || !head.next) return head;
  let newHead = new ListNode(0);
  let newCur = newHead;
  let dummy = new ListNode(0, head);
  let cur = head;
  let prev = dummy;
  while (cur) {
    if (cur.val >= x) {
      newCur.next = cur;
      newCur = cur;
      cur = cur.next;
      newCur.next = null;
      prev.next = cur;
    } else {
      prev = cur;
      cur = cur.next;
    }
  }  
  if (dummy.next) {
    cur = dummy.next ? dummy.next : newHead.next;
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = newHead.next;
    return dummy.next;
  }
  return newHead.next;
};

const head = new ListNode(
  5,
  new ListNode(
    4,
    new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))
  )
);

// head = new ListNode(1, new ListNode(1));
let cur = partition(head, 3);

while (cur) {
  console.log(cur.val);
  cur = cur.next;
}
