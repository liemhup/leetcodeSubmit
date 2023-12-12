/**
 * Given the head of a sorted linked list,
 * delete all nodes that have duplicate numbers,
 * leaving only distinct numbers from the original list.
 * Return the linked list sorted as well.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let dummy = new ListNode(0, head);
  let cur = head;
  let last = dummy;
  let shouldRemove = false;
  while (cur.next) {
    if (cur.next.val != cur.val) {
      if (shouldRemove) {
        last.next = cur.next;
        shouldRemove = false;
      } else {
        last = last.next;
      }
    } else {
      shouldRemove = true;
    }
    cur = cur.next;
  }
  if (shouldRemove) {
    last.next = null;
  }
  return dummy.next;
};

const head = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(
        3,
        new ListNode(
          5,
          new ListNode(
            5,
            new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(7))))
          )
        )
      )
    )
  )
);

let cur = deleteDuplicates(head);

while (cur) {
  console.log(cur.val);
  cur = cur.next;
}
