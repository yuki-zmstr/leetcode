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

  var climbStairs = function (n) {
    // every time a climb happens, add 1 to total
    // return total.
    // if (n == 0) return 1;
    // else if (n < 0) return 0;
    // else return climbStairs(n - 1) + climbStairs(n - 2);
    // O(2^N)

    var res = Array(n + 1);
    res[0] = 1;
    res[1] = 1;
    for (let i = 2; i <= n; i++) {
      res[i] = res[i - 1] + res[i - 2];
    }
    return res[n];
  };
  console.log(climbStairs(44));
});
