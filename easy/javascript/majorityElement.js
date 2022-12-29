const fs = require("fs");

// maintain an object
// for each element,
// if the element is already in the object, plus 1
// if not set 1.
// loop through the object to find the max.
var majorityElement = function (nums) {
  var ref = new Object();
  for (item of nums) {
    if (ref.hasOwnProperty(item)) {
      ref[item] += 1;
    } else {
      ref[item] = 1;
    }
  }
  ref = Object.keys(ref).map((k) => [k, ref[k]]);
  console.log(ref);
  var max = 0;
  var max_element = "";
  for ([key, value] of ref) {
    if (value > max) {
      max_element = key;
      max = value;
    }
  }
  console.log(max_element);
  return max_element;
};

majorityElement([2, 2, 1, 1, 1, 2, 2]);
