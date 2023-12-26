// Design a queue that supports push and pop operations in the front, middle, and back.

// Implement the FrontMiddleBack class:

//     FrontMiddleBack() Initializes the queue.
//     void pushFront(int val) Adds val to the front of the queue.
//     void pushMiddle(int val) Adds val to the middle of the queue.
//     void pushBack(int val) Adds val to the back of the queue.
//     int popFront() Removes the front element of the queue and returns it. If the queue is empty, return -1.
//     int popMiddle() Removes the middle element of the queue and returns it. If the queue is empty, return -1.
//     int popBack() Removes the back element of the queue and returns it. If the queue is empty, return -1.

// Notice that when there are two middle position choices,
// the operation is performed on the frontmost middle position choice. For example:

//     Pushing 6 into the middle of [1, 2, 3, 4, 5] results in [1, 2, 6, 3, 4, 5].
//     Popping the middle from [1, 2, 3, 4, 5, 6] returns 3 and results in [1, 2, 4, 5, 6].

class FrontMiddleBackQueue {
  constructor() {
    this.left = [];
    this.right = [];
  }
  adj() {
    while (this.left.length > this.right.length)
      this.right.unshift(this.left.pop());
    while (this.left.length + 1 < this.right.length)
      this.left.push(this.right.shift());
  }
  pushFront(val) {
    this.left.unshift(val);
    this.adj();
  }

  pushMiddle(val) {
    this.left.push(val);
    this.adj();
  }

  pushBack(val) {
    this.right.push(val);
    this.adj();
  }

  popFront() {
    if (this.right.length == 0) return -1;
    const res = this.left.length ? this.left.shift() : this.right.shift();
    this.adj();
    return res;
  }

  popMiddle() {
    if (!this.right.length) return -1;
    const res =
      this.left.length === this.right.length
        ? this.left.pop()
        : this.right.shift();
    this.adj();
    return res;
  }

  popBack() {
    if (!this.right.length) return -1;
    const res = this.right.pop();
    this.adj();
    return res;
  }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
