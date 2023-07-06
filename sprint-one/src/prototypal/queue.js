var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // utilize a protoype chain/lookup delegation
  // use Object.create(queueMethods.prototype)
  // create resulting obj with above
  var obj = Object.create(queueMethods);
  // create necessary variables - storage and start/end
  obj.storage = {};
  obj.start = 0;
  obj.end = 0;
  // return result
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end++] = value;
};

queueMethods.dequeue = function() {
  var remove = this.storage[this.start];
  delete this.storage[this.start];
  this.size() && this.start++;
  return remove;
};

queueMethods.size = function() {
  return this.end - this.start;
};
