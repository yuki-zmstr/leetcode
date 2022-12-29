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

  var plusOne = function (digits) {
    // console.log(digits);
    var s = "";
    for (var i = 0; i < digits.length; i++) {
      s += digits[i];
    }
    s = BigInt(s);
    s += BigInt(1);
    const res = Array.from(s.toString());
    // console.log(res);
  };
  plusOne(digits);
});
