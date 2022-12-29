const fs = require("fs");

var thirdMax = function (nums) {
  nums = new Set(nums); //O(n)
  nums = Array.from(nums).sort(function (a, b) {
    return a - b;
  }); // O(nlogn)
  console.log(nums);
  if (nums.length <= 2) return Math.max(...nums);
  return nums[nums.length - 3];
};

console.log(
  thirdMax([
    3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8,
    5, 6,
  ])
);
