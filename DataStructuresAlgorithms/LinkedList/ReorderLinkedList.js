// Node
class Node_Class {
  constructor(data, next = null) {
    this.data = data,
      this.next = next
  }
}

// Linked List
class Linked_List {
  constructor() {
    // Initializing an empty list
    this.head = null;
    this.size = 0;
  }

  insertAtLast(data) {
    // create a new node
    let node = new Node_Class(data)

    // Check if the list is empty
    if (this.head === null) {
      // the head will be the node
      this.head = node;
    } else {
      // We have to reach the last node
      let pointer = this.head;
      console.log('Before: ', pointer);

      // PUT OUR POINTER IN THE LAST NODE
      // We cannot modify the actual node, we have to be before it
      // current.next = last node
      while (pointer.next) {
        pointer = pointer.next;
      }
      // Now that current is in the last node, the next one will be our new node
      pointer.next = node
      console.log('After: ', pointer);
    }
    this.size++;
    console.log(this.size);
  }

  seeList() {
    let pointer = this.head;

    if (!pointer) {
      console.log('Empty list!');
    } else {
      if (pointer.next) {
        while (pointer) {
          console.log(pointer.data);
          pointer = pointer.next;
        }
      } else {
        console.log(pointer);
      }
    }
  }

  // Now, create a method that take the 2nd half of the list and reverses it
  // Ex:
  //                ---------------- 2n -------------------
  //               |                                      |
  // Linked list: X1 --> X2 ---> X3 ---> X4 ---> X5 ---> X6
  //              |               |       |             |
  //              ------- n ------        ------- n ----
  //                                     This n has to be reversed      

  // Expectec result: X1 ---> X2 ---> X3 ---> X6 ---> X5 --> X4
  //                   |               |       |             |
  //                   ------- n ------        ------- n ----

  reOrderLinkedList() {
    // Fisrt we need to knwo if its even, so we can divide it by 2
    if (this.size % 2 !== 0) {
      console.log('Linked list is not even, we cannot take the 2nd half');
    } else {
      let size_half = this.size / 2;
      console.log('SIZE HALF: ', size_half);
      // 1. We need to be in the last node of the first n
      let pointer_1n = this.head;
      console.log('FIRST POINTER HEAD: ', pointer_1n.data);
      for (let counter = 1; counter < size_half; counter++) {
        pointer_1n = pointer_1n.next
      }
      console.log('FIRST POINTER: ', pointer_1n.data);

      // REVERSE THE 2ND LINKED LIST 

      // Save head of the 2nd list, so we point later to null, so it becomes the last
      let old_head_2nd_list = pointer_1n.next;
      // Put our 2nd pointer on the 1st position on the 2nd n
      let previous_pointer_2n = pointer_1n; // 30
      let current_pointer_2n = pointer_1n.next; // 40 ----> head of 2nd n
      while (current_pointer_2n) {
        console.log(current_pointer_2n);
        // 1.Temporary next pointer, because when we update the next, we loose our next 
        let next = current_pointer_2n.next;
        // 2. curren.next will be our previous node
        current_pointer_2n.next = previous_pointer_2n;
        // 3. Move our previous pointer
        previous_pointer_2n = current_pointer_2n;
        // 4. Move our next pointer
        current_pointer_2n = next;
      }
      // 5. Our old head will point to null, so it becomes the last one
      old_head_2nd_list.next = null;
      // 6. Now we put our first pointer.next to the last node
      pointer_1n.next = previous_pointer_2n;
    }
  }
}

const linked_list = new Linked_List();

linked_list.insertAtLast(10);
linked_list.insertAtLast(20);
linked_list.insertAtLast(30);
linked_list.insertAtLast(40);
linked_list.insertAtLast(50);
linked_list.insertAtLast(60);

linked_list.seeList();
linked_list.reOrderLinkedList();
linked_list.seeList();
