// 83. Remove Duplicates from Sorted List
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:
// Input: head = [1,1,2]
// Output: [1, 2]

// Example 2:
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// Constraints:
// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.


// THE LIST IS ORGANIZED IN ASCENDING ORDER
// SO WHAT WE HAVE TO DO IS TO CHECK IS THE NEXT NUMBER IS REPEATED
var deleteDuplicates = function (head) {
  console.log(head);

  // for (let i = 0; i < head.length; i++) {
  //   let current = head[i];
  //   let next = head[i + 1];
  //   let second_next = head[i + 2];
  //   // if both numbers exits lets compare
  //   if (current && next) {
  //     console.log(current, next);
  //     if (current === next) {
  //       head.splice(i + 1, 1)

  //     }
  //   }
  //   console.log(head);

  //   // console.log(head[i]);
  // }

  let current = 0;
  let next = current + 1;

  while (next < head.length) {
    console.log(head[current], head[next]);
    if (head[current] === head[next]) {
      head.splice(next, 1);
      console.log(head);
    } else {
      current++;
    }
  }

  console.log(head);

};

// deleteDuplicates([1, 1, 2])
// // Expected --> [1,2]

// deleteDuplicates([1, 1, 2, 3, 3])
// Expected ---> [ 1, 2, 3 ]

deleteDuplicates([1, 1, 1, 2, 2, 2])
// Expected ---> [ 1 ]