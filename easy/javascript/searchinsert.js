const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  var input = data.split("\n");
  //   convert string into array
  const nums = JSON.parse(input[0]);
  const target = input[1];

  var searchInsert = function (nums, target) {
    let recur = function (nums, target, start, end) {
      console.log("searching");
      if (start > end) {
        console.log(end + 1);
        return end;
      }
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] == target) {
        console.log(mid);
        return mid;
      }
      if (nums[mid] > target) {
        return recur(nums, target, start, mid - 1);
      } else {
        return recur(nums, target, mid + 1, end);
      }
    };
    return recur(nums, target, 0, nums.length - 1);
  };

  searchInsert(nums, target);
});
