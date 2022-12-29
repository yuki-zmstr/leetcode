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

  var addBinary = function (a, b) {
    // Number primitive that can only safely store integer values up to 2^53
    var reduce = function (x) {
      x = x.toString();
      var res = BigInt(0);
      for (var i = 0; i < x.length; i++) {
        res += BigInt(x[i]) * BigInt(Math.pow(2, x.length - i - 1));
      }
      return res;
    };
    const r = reduce(a) + reduce(b);
    console.log(r.toString(2));
    return r.toString(2);
  };
  addBinary(
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
  );
});
