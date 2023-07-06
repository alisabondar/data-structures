var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.end = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.end++] = value;
};

Stack.prototype.pop = function() {
  var remove = this.storage[this.end - 1];
  delete this.storage[this.end - 1];
  this.size() && this.end--;
  return remove;
};

Stack.prototype.size = function() {
  return this.end;
};

