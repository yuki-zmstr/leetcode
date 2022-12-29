const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  // using --order traversal will not work
  // ----1---1 vs 1----1 -> the traversal will be the same.
  var input = data.split("\n");
  var isSameTree = function (p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
  };
  isSameTree(
    {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: null,
    },
    {
      val: 1,
      left: null,
      right: { val: 2, left: null, right: null },
    }
  );
});
