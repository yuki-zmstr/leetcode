const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  var input = data.split("\n");
  //   convert string into array
  const nums = JSON.parse(input[0]);
  const val = input[1];
  //   const nums = data;
  const s = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums[i] = 51;
    } else {
      s.push(nums[i]);
    }
  }
  nums.sort(function (a, b) {
    return a - b;
  });
  console.log(s);
  return s.length;
});
