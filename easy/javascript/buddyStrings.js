const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  var input = data.split("\n");
  // aa aa true
  // abb abb true
  // abc abc false
  // abcd cabd true
  // set_in
  // set_diff_s
  // set_diff_g
  // if the strings are identical, see if all are different. if yes, return false, else return true
  // if the strings have two differences
  // see if the two sets are the same.
  // if the sets have a length of more than 1, return false
  var buddyStrings = function (s, goal) {
    if (s.length !== goal.length) return false;
    const set_in = new Set();
    const set_diff_s = new Set();
    const set_diff_g = new Set();
    var counter = 0;
    for (var i = 0; i < s.length; i++) {
      set_in.add(s[i]);
      if (s[i] !== goal[i]) {
        if (counter >= 2) return false;
        counter += 1;
        set_diff_s.add(goal[i]);
        set_diff_g.add(goal[i]);
      }
    }
    // all are identical
    if (counter === 2) {
      // check if sets are equal
      return Array.from(set_diff_s).every((element) => {
        return set_diff_g.has(element);
      });
    } else if (counter === 0) {
      if (set_in.size === s.length) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };
  buddyStrings("abcdd", "abcdd") ? console.log("true") : console.log("false");
});
