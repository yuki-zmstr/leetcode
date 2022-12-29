const fs = require("fs");
const { default: nodeTest } = require("node:test");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  var input = data.split("\n");

  // if node.left === null but node.right !== null return false
  // if node.right === null but node.left !== null return false
  // if node.left === null && node.right === null return true
  // check if node.left.val === node.right.val && node.right.val === node.left.val
  var isSymmetric = function (root) {
    var helper = function (r1, r2) {
      if (!r1 && !r2) return true;
      if (!r1 || !r2) return false;
      if (r1.val !== r2.val) return false;
      return helper(r1.left, r2.right) && helper(r1.right, r2.left);
    };
    return helper(root, root);
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
