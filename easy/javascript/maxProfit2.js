const fs = require("fs");

// use a min and max pointer
// also a current pointer
// at first, min , max points at index 0
// move current to next
// if current is smaller than min, min = current, max = current
// if current is bigger than min, max = current, compute diff, store diff

var maxProfit = function (prices) {
  var min = 0;
  var max = 0;
  var max_diff = 0;
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < prices[min]) {
      min = i;
      max = i;
    } else if (prices[i] > prices[min]) {
      max = i;
      var diff = prices[max] - prices[min];
      if (diff > max_diff) {
        // console.log("resetting diff");
        max_diff = diff;
      }
    }
  }
  // console.log(max_diff);
  return max_diff;
};

// maxProfit([7, 1, 5, 3, 6, 4]);
// maxProfit([1, 2, 3]);
// maxProfit([2, 1, 3]);
// maxProfit([2, 4, 1])
// maxProfit([2, 4, 1, 5]);

maxProfit([2, 4, 1]);
