const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  var input = data.split("\n");
  var hasCycle = function (head) {
    // use an object for visited, recStack
    // empty at first
    // in helper function,
    // if recStack[node] === true, means there is a loop.
    // if visited[node] === true, means there is
    var helper = function (node, visited, recStack) {
      if (recStack[node]) return true; //
      if (visited[node]) return false; // already explored, part of dfs
      visited[node] = true;
      recStack[node] = true;
    };
  };
});
