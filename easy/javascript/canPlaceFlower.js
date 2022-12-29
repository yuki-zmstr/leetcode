var canPlaceFlowers = function (flowerbed, n) {
  var prev = false;
  var aft = true;
  for (var i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      // check if can plant
      if (i === flowerbed.length - 1) {
        aft = false;
      } else {
        aft = flowerbed[i + 1] === 1 ? true : false;
      }
      if (!prev && !aft) {
        // can plant
        n -= 1;
        prev = true;
      } else {
        prev = false;
      }
    } else {
      // plant is alr there
      prev = true;
    }
  }
  if (n <= 0) return true;
  return false;
};

console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1));
