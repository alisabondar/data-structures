var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create resulting var
  var obj = {};
  // add helper properties - storage and end
  obj.storage = {};
  obj.end = 0;
  // use extend to add methods
  _.extend(obj, stackMethods);
  // return resulting var
  return obj;
};

var stackMethods = {};

// create push, pop, size methods
stackMethods.push = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

stackMethods.pop = function() {
  // store item to be removed
  var remove = this.storage[this.end - 1];
  delete this.storage[this.end - 1];
  // check if size is truthy and decrement queue
  this.size() && this.end--;
  return remove;
};

stackMethods.size = function() {
  return this.end;
};
