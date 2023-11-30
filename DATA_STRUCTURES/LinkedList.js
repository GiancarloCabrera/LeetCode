// Linked List
// It is a linear data structure

// Lets create some nodes

const node1 = {
  data: 100
}

const node2 = {
  data: 200
}

// These are jus two independent objects
// Now lets link them both as a list

node1.next = node2;

// Now we can see we linked node2 in node1
// console.log(node1);
// This is the result ---> { data: 100, next: { data: 200 } }

// Now lets create a class of node
class Node {
  // So we initiallice data ---> contians the data
  // next ---> is the pointer that points to the next value 
  constructor(data, next = null) {
    // Intializing vairables
    this.data = data;
    this.next = next;
  }
}

// Now lets build a new node based on this class
const new_node = new Node(100);
// console.log(new_node);

// Now lets create a class which will be our linked list
class LinkedList {
  constructor() {
    // The head is the first element of a list, if its null, it means the list is empty
    // So as we can see we initiallice the list empty
    this.head = null;
    // And the size of the list
    this.size = 0;
  }

  // Methods

  // Insert first node
  insertFirst(data) {
    // So the head will be our first object
    // the data will be the data
    // and the point will be the header
    // but, why? because it is only one node, so we set the pointer to the node itself
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    // Lets create a new node where it will be the last one
    let node = new Node(data, null);

    // If the head is empry it means, we jus have to add the node on the first position
    if (this.head === null) {
      // the head will be the node
      this.head = node;
    } else {
      // We put our pointer on the beggining
      let current = this.head;
      // We dont knwo when it is the final item
      // So we iterate while there is a next item
      // That ensures us that once it finishes, current will be at the end pf our list 
      // YOU CANNOT MODIFY THE ACTUAL NODE, YOU HAVE TO BE BEFORE THE ONE YOU WANT TO MODIFY, AND MODIFIY .NEXT

      while (current.next) {
        current = current.next
      }

      // // And now we jus have to stablish that the next item of the end will be our node
      current.next = node;

      // while (true) {
      //   if (current.next === null) {
      //     current.next = node;
      //     break;
      //   } else {
      //     current = current.next
      //   }
      // }
    }
    this.size++;
  }

  // Insert index --> anywhere in between
  insertIndex(index, data) {
    // Lets validate the index actually exisits
    if (index > this.size) {
      return;
    }

    // If the index is 0, it goes in the begginig
    if (index === 0) {
      this.insertFirst(data);
      return;
    }
    // Lets put our pointer at the beggining
    let current = this.head;
    let previus;
    // This is our counter
    let count = 0;

    // Initializing our node
    let node = new Node(data, null);

    // YOU CANNOT MODIFY THE ACTUAL NODE, YOU HAVE TO BE BEFORE THE ONE YOU WANT TO MODIFY, AND MODIFIY .NEXT
    while (count < index) {
      previus = current; //The node before the index we want to insert
      count++;
      current = current.next; // The node after the index
      // So the idea of this is to leave the positions likie this -->
      // [previus] [index] [current]
    }

    // Now the we have this structure and we put the index where we want to stablish the new node
    // [previus]                 [index]                            [current]
    //                         Node goes here
    // [previus] previus.next --> node    ---> node.next    ---->   [current] 
    // So now we put our node doing this
    node.next = current;
    previus.next = node;

    // increase size --> because we added one new node
    this.size++;

    // console.log('PREVIUS: ', previus);
    // console.log('CURRENT: ', current);
  }
  // Get anywhere

  getAtIndex(index) {
    if (index > this.size) {
      return;
    }
    // We put our pointer at the beggining
    let current = this.head;
    // Lets stablish a counter
    let counter = 0;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    console.log('THE NODE IS: ', current.data);
  }

  // Remove anywhere
  removeAtIndex(index) {
    if (index > this.size) {
      return;
    }

    let current = this.head;
    let previus;
    let counter = 0;

    if (index === 0) {
      // If index is 0, it means we remove the head
      this.head = current.next;
      console.log('NODE REMOVED: ', current.data);
    } else {

      // We put < beacues we need previus pointer to be before the actual index
      while (counter < index) {
        previus = current;
        current = current.next;
        counter++;
      }
      console.log('NODE REMOVED: ', current.data);
      // Now lets connect our previus to our next next node, so we remove the current one
      previus.next = current.next;
      // We removed one, so we set size - 1;
    }
    this.size--;
  }
  // Clear the list
  clearList() {
    this.head = null;
    this.size = 0;
    // Before --> { data: 300, next: { data : ....}}
    // After --> null
  }

  // Print list data
  printList() {
    // We put our pointer on the head
    let current = this.head;

    // And we iterate while current
    while (current) {
      // We print it
      console.log(current.data);
      // and then put it ion the next position
      current = current.next;
    }
  }
}

// Instancing Linked List class
const linked_list = new LinkedList();

// Lets insert the first item
linked_list.insertFirst(100);
// Now lets insetr another item, this will be automatically the first one
// Last in will be the first one in the list
linked_list.insertFirst(200);

linked_list.insertFirst(300);

linked_list.insertLast(400);

linked_list.insertIndex(2, 500);

linked_list.printList();

linked_list.removeAtIndex(0);

linked_list.printList();

linked_list.getAtIndex(2);

linked_list.clearList();
console.log('CLEARED LIST: ');
linked_list.printList();