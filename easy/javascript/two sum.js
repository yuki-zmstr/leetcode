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

  var solution = [];
  // for (var i = 0; i < nums.length - 1; i++) {
  //   for (var j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] == target) {
  //       solution.push(i);
  //       solution.push(j);
  //       console.log(solution);
  //       return solution;
  //     }
  //   }
  // }
});
