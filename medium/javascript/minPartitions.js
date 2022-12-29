const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const digits = JSON.parse(data);

  var minPartitions = function (n) {
    var max = parseInt(n[0]);
    for (var i = 1; i < n.length; i++) {
      if (n[i] > max) {
        max = parseInt(n[i]);
      }
    }
    console.log(max);
    return max;
  };
  minPartitions("27346209830709182346");
});
