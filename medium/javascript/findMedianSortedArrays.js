// construct a new sorted array
// return array[length / 2] if odd

var findMedianSortedArrays = function (nums1, nums2) {
  var res = [];

  while (nums1.length && nums2.length) {
    if (nums1[0] < nums2[0]) {
      res.push(nums1[0]);
      nums1.shift();
    } else {
      res.push(nums2[0]);
      nums2.shift();
    }
  }
  if (nums1) res.push(...nums1);
  if (nums2) res.push(...nums2);
  console.log(res);

  if (res.length % 2 !== 0) {
    // return 1;
    return res[Math.floor(res.length / 2)];
  } else {
    return (res[res.length / 2] + res[res.length / 2 - 1]) / 2;
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
