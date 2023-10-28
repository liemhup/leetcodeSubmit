/**
 * // Definition for a Node.
 *
 */

class Node {
  constructor(val, next, random) {
    this.val = val;
    this.next = next || null;
    this.random = random || null;
  }
  print() {
    let cur = this;
    while (cur) {
      console.log(cur);
      cur = cur.next;
    }
  }
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;
  let cur = head;
  const oldToNew = new Map();

  while (cur != null) {
    oldToNew.set(cur, new Node(cur.val));
    cur = cur.next;
  }
  cur = head;
  while (cur != null) {
    oldToNew.get(cur).next = oldToNew.get(cur.next) || null;
    oldToNew.get(cur).random = oldToNew.get(cur.random) || null;
    cur = cur.next;
  }
  //   console.log(oldToNew.get(head));
  return oldToNew.get(head);
};
const copyRandomList2 = (head) => {
  if (!head) return null;
  let cur = head;
  let newNode;
  // modife old list, make a coppy of each node right after the node
  while (cur) {
    newNode = new Node(cur.val, cur.next);
    cur.next = newNode;
    cur = newNode.next;
  }
  // point the random
  cur = head;
  while (cur) {
    cur.next.random = cur.random ? cur.random.next : null;
    cur = cur.next.next;
  }
  cur = head;
  const newHead = head.next;
  let newCur = newHead;
  //sepreate 2 list
  while (cur) {
    cur.next = cur.next.next;
    newCur.next = newCur.next ? newCur.next.next : null;
    cur = cur.next;
    newCur = newCur.next;
  }
  return newHead;
};

const three = new Node(3, null);
const tow = new Node(2, three);
const head = new Node(1, tow, tow);
copyRandomList2(head);
