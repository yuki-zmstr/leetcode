const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  var input = data.split("\n");
  //   convert string into array
  console.log(input);
  const checker = (s) => {
    const digits = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
    if (s[0] == "(") {
      if (s.length != 14) {
        return false;
      }
      for (var i = 1; i < s.length; i++) {
        if (i === 4 && s[i] !== ")") {
          return false;
        } else if (i === 5 && s[i] !== " ") {
          return false;
        } else if (i === 9 && s[i] !== "-") {
          return false;
        } else if (i !== 4 && i !== 5 && i !== 9 && !digits.has(s[i])) {
          return false;
        }
      }
      return true;
    } else if (digits.has(s[0])) {
      if (s.length !== 12) {
        return false;
      }
      for (var i = 1; i < s.length; i++) {
        if (i === 3 && s[i] !== "-") {
          return false;
        } else if (i === 7 && s[i] !== "-") {
          return false;
        } else if (i !== 3 && i !== 7 && !digits.has(s[i])) {
          return false;
        }
      }
      return true;
    }
  };
  for (var num of input) {
    if (checker(num)) {
      console.log(num);
    }
  }
});
