const { resolveSoa } = require("dns");
const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  var input = data.split("\n");
  var singleNumber = function (nums) {
    // maintain a set
    // loop through the array,
    // if not in the set, add to the set
    // if in the set, remove from the set
    // return set[0]
    res = new Set();
    for (var i = 0; i < nums.length; i++) {
      // O(n)
      if (!res.has(nums[i])) {
        //O(1)
        res.add(nums[i]);
        // O(1)
      } else {
        res.delete(nums[i]);
        // O(1)
      }
    }
    // console.log(Array.from(res)[0]);
    return Array.from(res)[0];
  };
  singleNumber([1]);
});
