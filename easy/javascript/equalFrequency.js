const fs = require("fs");
const { METHODS } = require("http");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  var input = data.split("\n");
  //   convert string into array
  const nums = JSON.parse(input[0]);
  // use an object to store the frequency of characters.
  // if we have more than two frequencies return false abbccc, abbcccdddd
  // if we have 1 frequency
  // if that is 1 return true eg abc
  // if that is not 1 return false aabb
  // if we have 2 freqncies eg abb
  // if there is a {1:1}, return true
  // if the difference in the key is 1 and there is a 1 as a value, return true;
  // if the difference in the key is 1 but there is no 1, eg[3,4] return false;
  // else return false
  var equalFrequency = function (word) {
    var obj = new Object();
    for (var i = 0; i < word.length; i++) {
      if (word[i] in obj) {
        obj[word[i]] += 1;
      } else {
        obj[word[i]] = 1;
      }
    }
    var freq = new Object();
    for (var [key, value] of Object.entries(obj)) {
      if (value in freq) {
        freq[value] += 1;
      } else {
        freq[value] = 1;
      }
    }
    console.log(freq);
    var size = Object.keys(freq).length;
    if (size >= 3) {
      console.log("too many frequencies");
      return false;
    }
    if (size === 1 && (1 in freq || Object.entries(freq)[0][1] === 1)) {
      console.log("1");
      return true;
    }
    // if there isn't an odd one, return false
    if (!Object.values(freq).includes(1)) {
      console.log("does not have 1");
      return false;
    }
    if (1 in freq && freq[1] === 1) {
      console.log("has 1:1");
      return true;
    }
    var odd = Object.entries(freq)[Object.values(freq).indexOf(1)][0];
    console.log("odd one is", odd);
    delete freq[odd];
    var main = Object.entries(freq)[0][0];
    console.log("main one is", main);
    if (odd - main === 1 || (main - odd === 1 && freq[main] === 1)) {
      console.log("can delete");
      return true;
    }
    console.log("cannot delete");
    return false;
  };
  equalFrequency("zz");
});
