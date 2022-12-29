const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  // var input = data.split("\n");
  //   convert string into array
  const nums = JSON.parse(data);
  //   const nums = data;

  const s = new Set();
  for (var i = 0; i < nums.length; i++) {
    if (s.has(nums[i])) {
      nums[i] = 101;
    } else {
      s.add(nums[i]);
    }
  }
  nums.sort(function (a, b) {
    return a - b;
  });
  return s.size;
});
