var lengthOfLongestSubstring = function (s) {
  var letters = new Object(); //stores each letter with its index
  var starting_idx = 0; // maintain the starting index.
  var result = "";
  for (var i = 0; i < s.length; i++) {
    if (!letters.hasOwnProperty(s[i])) {
      letters[s[i]] = i;
    } else {
      if (result < i - starting_idx) {
        result = i - starting_idx;
      }
      starting_idx = letters[s[i]] + 1;
      for (char in letters) {
        // O(n^2)
        if (letters[char] < letters[s[i]]) {
          delete letters[char];
        }
      }
      letters[s[i]] = i;
    }
  }
  if (result < s.length - starting_idx) {
    result = s.length - starting_idx;
  }
  return result;
};

lengthOfLongestSubstring("abcabcbb");
