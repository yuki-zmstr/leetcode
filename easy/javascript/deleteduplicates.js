const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const digits = JSON.parse(data);

  // given the head of a sorted linked list, which is a representation of the whole LL,
  // delete all duplicates
  // return the list sorted.

  var deleteDuplicates = function (head) {
    if (!head) return null;
    var dummyHead = head;
    var current = dummyHead;
    while (head) {
      if (head.next) {
        if (head.next.val !== current.val) {
          current.next = head.next;
          current = current.next;
        }
        head = head.next;
      } else {
        current.next = null;
        return dummyHead;
      }
    }
  };
  deleteDuplicates({
    val: 1,
    next: {
      val: 1,
      next: { val: 2, next: { val: 3, next: { val: 3, next: null } } },
    },
  });
});
