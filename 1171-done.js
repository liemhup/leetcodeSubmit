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
//beat 90%
const removeZeroSumSublists1 = (head) => {
  let helper = (node) => {
    let sum = 0;
    let cur = node;
    let map = new Map();
    while (cur) {
      sum += cur.val;
      if (sum == 0) {
        head = cur.next;
      }
      if (!map.has(sum)) {
        map.set(sum, cur);
      } else {
        map.get(sum).next = cur.next;
        return node;
      }
      cur = cur.next;
    }
    return null;
  };
  let isRemoved = helper(head);
  while (isRemoved) {
    isRemoved = helper(head);
  }
  return head;
};

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
[1, 3, 2, -3, -2, 5, 5, -5, 1];
let head = new ListNode(
  1,
  new ListNode(
    3,
    new ListNode(
      2,
      new ListNode(
        -3,
        new ListNode(
          -2,
          new ListNode(5, new ListNode(5, new ListNode(-5, new ListNode(1))))
        )
      )
    )
  )
);

// removeZeroSumSublists(head);
console.log(removeZeroSumSublists1(head));
