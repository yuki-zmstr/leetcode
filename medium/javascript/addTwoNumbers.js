// build a string,
// reverse the string, add,
// build a linked list by reversing.

var addTwoNumbers = function (l1, l2) {
  var reduce = function (l) {
    var res = "";
    while (l) {
      res += l.val;
      l = l.next;
    }
    return res;
  };
  var num1 = reduce(l1).split("").reverse().join("");
  var num2 = reduce(l2).split("").reverse().join("");
  const sum = (BigInt(num1) + BigInt(num2)).toString();
  console.log(sum);
  var current = null;
  var res = {};
  for (var i = 0; i < sum.length; i++) {
    //loop through the string.
    res = { val: parseInt(sum[i]), next: current };
    current = res;
  }
  console.log(res);
  return res;
};

addTwoNumbers(
  { val: 9, next: { val: 9, next: { val: 9, next: null } } },
  { val: 1, next: null }
);
