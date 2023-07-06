var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var last = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[last] = value;
    last++;
  };

  someInstance.pop = function() {
    var remove = storage[last - 1];
    delete storage[last - 1];
    someInstance.size() && last--;
    return remove;
  };

  someInstance.size = function() {
    return last;
  };

  return someInstance;
};
