const { resolveSoa } = require("dns");
const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  var input = data.split("\n");
  var isPalindrome = function (s) {
    ref = new Set([
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ]);
    s = s.toLowerCase();
    console.log(s);
    s2 = "";
    for (var i = 0; i < s.length; i++) {
      if (!ref.has(s[i])) continue;
      else {
        s2 += s[i];
      }
    }
    compare = s2.split("").reverse().join("");
    console.log(compare);
    for (var i = 0; i < s2.length; i++) {
      if (s2[i] != compare[i]) {
        console.log("not a palindrome");
        return false;
      }
    }
    console.log("palindrome");
    return true;
  };

  isPalindrome("0P");
});
