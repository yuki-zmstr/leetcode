const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  var input = data.split("\n");
  // start from the root,
  // explore left tree,
  // explore right tree,
  // once they return null, then add yourself.
  var postorderTraversal = function (root) {
    const res = [];
    const driver = function (node) {
      if (!node) {
        return;
      }
      driver(node.left);
      driver(node.right);
      res.push(node.val);
    };
    driver(root);
    // console.log(res);
    return res;
  };
  // inorderTraversal({ val: 1, left: null, right: null });
  postorderTraversal({
    val: 1,
    left: null,
    right: { val: 2, left: { val: 3, left: null, right: null }, right: null },
  });
});
