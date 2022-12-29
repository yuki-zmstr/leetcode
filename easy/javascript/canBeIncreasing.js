const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  var input = data.split("\n");
  var canBeIncreasing = function (nums) {
    var checker = function (nums2) {
      var compare = nums2[0];
      for (var i = 1; i < nums2.length; i++) {
        if (nums2[i] > compare) {
          compare = nums2[i];
        } else {
          return false;
        }
      }
      return true;
    };
    const l = nums.length;
    for (var i = 1; i <= l; i++) {
      var firstHalf = nums.slice(0, i - 1);
      var secondHalf = nums.slice(i);
      var combine = firstHalf.concat(secondHalf);
      if (checker(combine)) return true;
    }
    return false;
  };
  canBeIncreasing([100, 27, 100]);
});
