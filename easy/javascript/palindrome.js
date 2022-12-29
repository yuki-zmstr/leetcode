const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  // var input = data.split("\n");
  //   convert string into array
  // const nums = JSON.parse(input[0]);
  const x = data;
  const arr = x.toString().split("");
  const r_arr = [...arr].reverse();
  console.log(r_arr);
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== r_arr[i]) {
      console.log("false");
      return false;
    }
  }
  console.log("true");
  return true;
});
