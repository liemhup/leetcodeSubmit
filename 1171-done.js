// Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.

// After doing so, return the head of the final linked list.  You may return any such answer.

// (Note that in the examples below, all sequences are serializations of ListNode objects.)

/**
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
var removeZeroSumSublists = function (head) {
  let cur = head;
  let arr = [];
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  function findZeroSumSubarray(arr) {
    let sum = 0;
    let map = new Map();
    map.set(0, -1); // Initialize with sum 0 at index -1

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];

      if (map.has(sum)) {
        return [map.get(sum) + 1, i + 1];
      }

      map.set(sum, i);
    }

    return null; // Return null if no subarray sums to zero
  }
  let indexs = findZeroSumSubarray(arr);
  while (indexs) {
    arr.splice(indexs[0], indexs[1] - indexs[0]);
    indexs = findZeroSumSubarray(arr);
  }
  if (arr.length == 0) return null;
  let root = new ListNode(arr[0]);
  cur = root;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return root;
};

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let head = new ListNode(
  5,
  new ListNode(
    4,
    new ListNode(
      -7,
      new ListNode(
        11,
        new ListNode(-11, new ListNode(4, new ListNode(-2, new ListNode(-2))))
      )
    )
  )
);

removeZeroSumSublists(head);
