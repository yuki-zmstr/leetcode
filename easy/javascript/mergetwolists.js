const fs = require("fs");

fs.readFile("in.in", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const digits = JSON.parse(data);

  // var mergeTwoLists = function (list1, list2) {
  //   var res = [];
  //   while (list1.length >= 1 || list2.length >= 1) {
  //     if (list1.length == 0) {
  //       res = res.concat(list2);
  //       list2 = [];
  //     } else if (list2.length == 0) {
  //       res = res.concat(list1);
  //       list1 = [];
  //     } else {
  //       if (list1[0] <= list2[0]) {
  //         res.push(list1[0]);
  //         list1.splice(0, 1);
  //       } else {
  //         res.push(list2[0]);
  //         list2.splice(0, 1);
  //       }
  //     }
  //     console.log(res);
  //   }
  //   return res;
  // };

  // given the heads of two sorted LL. representation of the whole list
  // merge two lists in a sorted list.
  // return the head of the merged linked list;

  var mergeTwoLists = function (list1, list2) {
    var dummyHead = { val: -1, next: null };
    var current = dummyHead;
    while (list1 !== null && list2 !== null) {
      if (list1.val > list2.val) {
        console.log("setting second list");
        current.next = list2;
        list2 = list2.next;
      } else {
        console.log("setting first list");
        current.next = list1;
        list1 = list1.next;
      }
      current = current.next;
    }
    if (list1) {
      console.log("list 1 left");
      current.next = list1;
    }
    if (list2) {
      console.log("list 2 left");
      current.next = list2;
    }
    return dummyHead.next;
  };
  mergeTwoLists({ val: 1, next: null }, { val: 2, next: null });
});
