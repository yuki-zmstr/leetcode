const { resolve4 } = require("dns/promises");
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
  const digits = JSON.parse(data);

  var mySqrt = function (x) {
    var res = Math.sqrt(x);
    res = Math.floor(res);
    return res;
  };
  mySqrt(8);
});
