const fs = require("fs");

// freq
// [1,2,3,4,5] when encounter 1 as gcd, return
// [6,2,18]　true
// [4,12,18] false
// [6, 8, 9] false
// [4, 6] true
// [4,6,8]
// sort
// using the first element as a mod,
// check if the rest of the elements is divisible by the mod;
var majorityElement = function (deck) {
  var ref = new Object();
  for (item of deck) {
    if (ref.hasOwnProperty(item)) {
      ref[item] += 1;
    } else {
      ref[item] = 1;
    }
  }
  freqs = Object.keys(ref)
    .map((k) => ref[k])
    .sort(function (a, b) {
      return a - b;
    });
  freqs = new Set(freqs);
  freqs = Array.from(freqs);
  console.log(freqs);
  var gcd = function (a, b) {
    if (!a) return b;
    return gcd(b % a, a);
  };
  if (freqs.length === 1) {
    if (freqs[0] === 1) {
      console.log("only one");
      return false;
    } else {
      console.log("one big group");
      return true;
    }
  } else if (freqs.length === 2) {
    var g = gcd(freqs[0], freqs[1]);
    if (g === 1) {
      console.log("relatively prime");
      return false;
    }
    console.log("can divide");
    return true;
  } else {
    var g2 = gcd(freqs[0], freqs[1]);
    if (g2 === 1) {
      console.log("relatively prime");
      return false;
    }
    for (var i = 2; i < freqs.length; i++) {
      if (freqs[i] % g2 !== 0) {
        console.log("cannot divide by modulo");
        return false;
      }
    }
    console.log("all can be divided by modulo");
    return true;
  }
};

majorityElement([
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5,
]);
