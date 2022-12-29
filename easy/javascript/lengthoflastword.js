const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  // var input = data.split("\n");
  //   convert string into array
  // const nums = JSON.parse(input[0]);
  // const target = input[1];
  const s = JSON.parse(data);

  var lengthOfLastWord = function (s) {
    const arr = s.trim().split(" ");
    console.log(arr[arr.length - 1].length);
    return arr[arr.length - 1].length;
  };
  lengthOfLastWord(s);
});
