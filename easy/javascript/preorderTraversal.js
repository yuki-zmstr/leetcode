const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  var input = data.split("\n");
  // start from the root,
  // add yourself,
  // explore left, once reach null,
  // explore right, once reach null, end function.
  var preorderTraversal = function (root) {
    const res = [];
    const driver = function (node) {
      if (!node) {
        return;
      }
      res.push(node.val);
      driver(node.left);
      driver(node.right);
    };
    driver(root);
    console.log(res);
    return res;
  };
  // inorderTraversal({ val: 1, left: null, right: null });
  preorderTraversal({
    val: 1,
    left: null,
    right: { val: 2, left: { val: 3, left: null, right: null }, right: null },
  });
});
