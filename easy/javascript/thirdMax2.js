const fs = require("fs");

var thirdMax2 = function (nums) {
  nums = new Set(nums);
  nums = Array.from(nums);
  if (nums.length <= 2) {
    return Math.max(...nums); //O(n)
  }
  const max1 = Math.max(...nums); //O(n)
  var nums2 = new Array();
  for (item of nums) {
    if (item !== max1) {
      nums2.push(item);
    }
  } //O(n)
  const max2 = Math.max(...nums2); //O(n)
  // console.log(max2);
  var nums3 = new Array();
  for (item of nums2) {
    if (item !== max2) {
      nums3.push(item);
    }
  } //O(n)
  return Math.max(...nums3);
};

console.log(thirdMax2([2, 2, 1]));
