/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
//Given the head of a linked list head, in which each node contains an integer value.

// Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

// Return the linked list after insertion.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

var insertGreatestCommonDivisors = function (head) {
  const greatestCommonDivisor = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };
  let cur = head;
  let next = cur.next;
  while (cur.next) {
    const GCD = greatestCommonDivisor(cur.val, next.val);
    const newNode = new ListNode(GCD);
    cur.next = newNode;
    newNode.next = next;
    cur = next;
    next = cur.next;
  }
  return head;
};

const head = new ListNode(3, new ListNode(12, new ListNode(18)));

const inserted = insertGreatestCommonDivisors(head);

let cur = inserted;

while (cur) {
  console.log(cur.val);
  cur = cur.next;
}
