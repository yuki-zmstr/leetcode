const { resolveSoa } = require("dns");
const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  var input = data.split("\n");
  // low wants to go lower
  // high wants to go higher.
  //
  var maxProfit = function (prices) {
    // TLE
    // var max = 0;
    // const max_prices = Math.max(prices)
    // for (i = 0; i < prices.length - 1; i++) {
    //   if (prices[i] === max_prices) continue
    //   for (j = i + 1; j < prices.length; j++) {
    //     if (prices[j] - prices[i] > max) {
    //       max = prices[j] - prices[i];
    //     }
    //   }
    // }
    // use a stack
    // push the first element into the stack
    // for every next element,
    // if the element is smaller, pop the last element and store this new one
    // if the element is bigger than the second element, pop the second element and store the new element
    // if the stack is size 1, return zero
    // else return the differnce between the two
    // wrong answer [2,1,2,1,0,1,2]
    // const res = new Array();
    // res.push(prices[0]);
    // for (var i = 1; i < prices.length; i++) {
    //   console.log(res);
    //   if (res.length === 1 && prices[i] <= res[0]) {
    //     res.pop();
    //     res.push(prices[i]);
    //   } else if (res.length === 1 && prices[i] > res[0]) {
    //     res.push(prices[i]);
    //   } else if (res.length === 2 && prices[i] > res[1]) {
    //     res.pop();
    //     res.push(prices[i]);
    //   }
    //   console.log(res);
    // }
    // if (res.length === 2) {
    //   console.log(res[1] - res[0]);
    //   return res[1] - res[0];
    // } else {
    //   return 0;
    // }
    // [2,1,2,1,0,1,2]
    // sort [0,1,1,1,2,2,2]
    // argsort [4,1,3,5,0,2,6]
    // for all the prices before the first price, delete them.
    // will get [4,5,6]

    var argsort = function (arr) {
      res = new Array();
      to_sort = new Array();
      for (var i = 0; i < arr.length; i++) {
        to_sort.push([arr[i], i]);
      }
      to_sort = to_sort.sort();
      for (var i = 0; i < to_sort.length; i++) {
        res.push(to_sort[i][1]);
      }
      return res;
    };
    var findDiff = function (arr) {
      if (arr.length === 1) return 0;
      var max = 0;
      const max_prices = Math.max(prices);
      for (i = 0; i < prices.length - 1; i++) {
        if (prices[i] === max_prices) continue;
        for (j = i + 1; j < prices.length; j++) {
          if (prices[j] - prices[i] > max) {
            max = prices[j] - prices[i];
          }
        }
      }
      return max;
    };
    console.log(argsort(prices));
    const indexes = argsort(prices);
    const new_indexes = new Array();
    new_indexes.push(indexes[0]);
    for (var i = 1; i < indexes.length; i++) {
      if (indexes[i] > new_indexes[0]) {
        new_indexes.push(indexes[i]);
      }
    }
    console.log("new indexes", new_indexes);
    const newPrices = new Array();
    for (item of new_indexes) {
      newPrices.push(prices[item]);
    }
    console.log("new prices", newPrices);
    var new_indexes2 = new Array();
    new_indexes2.push(indexes[indexes.length - 1]);
    for (var i = indexes.length - 1; i >= 0; i--) {
      if (indexes[i] > new_indexes2[0]) {
        new_indexes2.push(indexes[i]);
      }
    }
    console.log("new indexes2", new_indexes2);
    const newPrices2 = new Array();
    new_indexes2 = new_indexes2.sort();
    for (item of new_indexes2) {
      newPrices2.push(prices[item]);
    }
    console.log("new prices2", newPrices2);
    const diff1 = findDiff(newPrices);
    const diff2 = findDiff(newPrices2);
    console.log(diff1, diff2);
    if (diff1 >= diff2) {
      return diff1;
    } else {
      return diff2;
    }
  };
  // maxProfit([7, 6, 4, 3, 1]);
  // maxProfit([7, 1, 5, 3, 6, 4]);
  // maxProfit([1, 2, 3]);
  // maxProfit([2, 1, 3]);
  // maxProfit([2, 4, 1]);
  maxProfit([7, 2, 4, 1]);
});
