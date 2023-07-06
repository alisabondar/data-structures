var Queue = function() {
  // first one in, first one out
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // create keys mimicing indices
  var last = 0;
  var first = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // adding someone to the end of the line
    storage[last] = value;
    last++;
  };

  someInstance.dequeue = function() {
    // store, remove, return first person in line
    var remove = storage[first];
    delete storage[first];
    someInstance.size() && first++;
    return remove;
  };

  someInstance.size = function() {
    return last - first;
    // // define a counter
    // var counter = 0;
    // // iterate through obj
    // for (var item in storage) {
    //   // increment counter
    //   counter ++;
    // }
    // // return counter
    // return counter;
  };

  return someInstance;
};
