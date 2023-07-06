class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.end = 0;
  }
  push(value) {
    this.storage[this.end++] = value;
  }
  pop() {
    var remove = this.storage[this.end - 1];
    delete this.storage[this.end - 1];
    this.size() && this.end--;
    return remove;
  }
  size() {
    return this.end;
  }
}