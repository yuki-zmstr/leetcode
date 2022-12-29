const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  var input = data.split("\n");
  // start from the root,
  // explore left tree,
  // once reach null, add yourself,
  // explore right.
  // once reach null, return, end function.
  var inorderTraversal = function (root) {
    const res = [];
    const driver = function (node) {
      if (!node) {
        return;
      }
      driver(node.left);
      res.push(node.val);
      driver(node.right);
    };
    driver(root);
    return res;
  };
  // inorderTraversal({ val: 1, left: null, right: null });
  inorderTraversal({
    val: 1,
    left: null,
    right: { val: 2, left: { val: 3, left: null, right: null }, right: null },
  });
});
