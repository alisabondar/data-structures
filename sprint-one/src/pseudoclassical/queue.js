var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // using new for instantiation
  // add supporting vars - storage and start/end
  this.storage = {};
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.end++] = value;
};

Queue.prototype.dequeue = function() {
  var remove = this.storage[this.start];
  delete this.storage[this.start];
  this.size() && this.start++;
  return remove;
};

Queue.prototype.size = function() {
  return this.end - this.start;
};