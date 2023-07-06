var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.end = 0;
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.end++] = value;
};

stackMethods.pop = function() {
  var remove = this.storage[this.end - 1];
  delete this.storage[this.end - 1];
  this.size() && this.end--;
  return remove;
};

stackMethods.size = function() {
  return this.end;
};