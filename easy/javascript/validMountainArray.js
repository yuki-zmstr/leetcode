var validMountainArray = function (arr) {
  if (arr.length === 1) return false;
  var incre = true;
  var decre = false;
  for (var i = 0; i < arr.length - 1; i++) {
    if (!incre && !decre) return false;
    if (incre) {
      if (arr[i + 1] === arr[i]) {
        incre = false;
      } else if (arr[i + 1] > arr[i]) {
      } else {
        if (i === 0) return false;
        decre = true;
        incre = false;
      }
    } else {
      if (arr[i + 1] === arr[i]) {
        decre = false;
      } else if (arr[i + 1] < arr[i]) {
      } else {
        return false;
      }
    }
  }
  if (!incre && decre) return true;
  return false;
};

console.log(validMountainArray([3, 5, 5]));
