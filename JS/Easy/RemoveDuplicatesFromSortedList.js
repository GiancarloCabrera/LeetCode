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
  // WE CREATE OUR REPRESENTATION OF THE LIST
  const dummy = head;
  // WHILE THERE IS A HEAD AND A NEXT, WE KEEP ITERATING
  while (head && head.next) {
    // REMEBER THE LIST IS SORTED, SO IF THERE IS A REPEATED NUMBER, IT WILL BE NEXT 
    if (head.val === head.next.val) {
      // SO WE REMOVE THE NEXT NUMBER BY REPLACING IT WITH THE NEXT NEXT
      head.next = head.next.next;
    } else {
      // IF THEY ARE NOT THE SAME, WE JUST KEEP MOVING
      head = head.next;
    }
    console.log(dummy);
  }
  return dummy;
};

// deleteDuplicates([1, 1, 2])
// // Expected --> [1,2]

// deleteDuplicates([1, 1, 2, 3, 3])
// Expected ---> [ 1, 2, 3 ]

deleteDuplicates([1, 1, 1, 2, 2, 2])
// Expected ---> [ 1 ]