const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const digits = JSON.parse(data);

  // set variable word
  // loop through the string.
  // if encoounter a character, concatnate that with word
  // if encounter a space, if word is not empty, push that into array
  // if word is empty, do nothing

  var reverseWords = function (s) {
    var res = [];
    var word = "";
    for (var i = 0; i < s.length; i++) {
      if (s[i] !== " ") {
        word += s[i];
      } else {
        if (word === "") {
        } else {
          res.push(word);
          word = "";
        }
      }
    }
    if (word) res.push(word);
    res = res.reverse();
    console.log(res.join(" "));
  };
  reverseWords("the");
});
