const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const digits = JSON.parse(data);

  var merge = function (nums1, m, nums2, n) {
    for (var i = m; i < m + n; i++) {
      nums1[i] = nums2[i - m];
    }
    console.log(nums1);
  };
  merge([1], 1, [], 0);
});
