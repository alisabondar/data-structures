var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // add variables here
  var obj = {};
  obj.storage = {};
  obj.start = 0;
  obj.end = 0;
  _.extend(obj, queueMethods);
  return obj;
};

// var extend = function(obj1, obj2) {
//   for (var item in obj2) {
//     obj1[item] = obj2[item];
//   }
// };

// add functions to method obj
// functions that manipulate storage go here
var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
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