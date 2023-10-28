/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// cach nhanh hon la khong point cur sang 1 node ma tao node moi luon voi val cua val be hon

var mergeTwoLists = function (list1, list2) {
  const mer = new ListNode(0);
  if (!list1 && !list2) return null;
  let cur = mer;
  while (list1 || list2) {
    if (!list1) {
      cur.next = list2;
      return mer.next;
    }
    if (!list2) {
      cur.next = list1;
      return mer.next;
    }
    if (list1.val >= list2.val) {
      console.log(list1.val, list2.val);
      cur.next = list2;
      cur = cur.next;
      list2 = list2.next;
    } else {
      cur.next = list1;
      cur = cur.next;
      list1 = list1.next;
    }
  }
};

const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);
const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

const mer = mergeTwoLists(list1, list2);
console.log(mer);
