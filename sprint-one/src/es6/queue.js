class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.start = 0;
    this.end = 0;
  }

  // add methods below
  enqueue(value) {
    this.storage[this.end++] = value;
  }
  dequeue() {
    var remove = this.storage[this.start];
    delete this.storage[this.start];
    this.size() && this.start++;
    return remove;
  }
  size() {
    return this.end - this.start;
  }
}
