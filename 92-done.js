/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Given the head of a singly linked list and two integers
 * left and right where left <= right, reverse the nodes of
 * the list from position left to position right, and return the
 * reversed list.
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
var reverseBetween = function (head, left, right) {
  if (left == null || right == null) return head;

  let cur = head;
  let point = left.next;
  while (cur.next != left) {
    cur = cur.next;
  }
  let left2 = cur;
  left.next = right.next;
  left2.next = right;
  right.next = point;
  point.next = left;
  let currentNode = head;
    while (currentNode !== null) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  return head;
};

const head = new ListNode(1);
const left = new ListNode(2);
head.next = left;
const point = new ListNode(3);
left.next = point;
const right = new ListNode(4);
point.next = right;
const tail = new ListNode(5);
right.next = tail;
//
reverseBetween(head,left,right);
