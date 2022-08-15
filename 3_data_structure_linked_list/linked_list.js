// 10 -> 5 -> 16
// 1 -> 10 -> 5 -> 16 //prepend(value)
// 1 -> 10 -> 99 -> 5 -> 16 //insert(index, value)

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  // my solution
  // insert(index, value) {
  //   if (index  > this.length + 2 || index  < 0) {
  //     return `Please return a valid index between 0-${this.length + 1}`;
  //   }

  //   if (index === 0) {
  //     return this.prepend(value);
  //   }

  //   if (index === this.length + 1) {
  //     return this.append(value);
  //   }

  //   let currentNode = this.head;
  //   let currentIndex = 0;

  //   while (currentNode !== null) {
  //     if (currentIndex === index - 1) {
  //       const newNode = new Node(value);
  //       newNode.next = currentNode.next;
  //       currentNode.next = newNode;
  //       this.length++;
  //     }

  //     currentNode = currentNode.next;
  //     currentIndex++;
  //   }

  //   return this;
  // }

  // Andrei solution
  insert(index, value) {
    // check params
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let leader = {};
      if (index >= this.length) {
        leader = this.traverseToIndex(this.length - 2);
      } else {
        leader = this.traverseToIndex(index - 1);
      }

      const holdingPointer = leader.next;
      leader.next = holdingPointer.next;
    }

    this.length--;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
console.log('myLinkedList', myLinkedList.printList())

myLinkedList.append(5);
console.log('myLinkedList', myLinkedList.printList())

myLinkedList.append(16);
console.log('myLinkedList', myLinkedList.printList())

myLinkedList.prepend(1);
console.log('myLinkedList', myLinkedList.printList())

// my test case - insert
// myLinkedList.insert(0, 90);
// console.log('myLinkedList', myLinkedList.printList())

// myLinkedList.insert(1, 80);
// console.log('myLinkedList', myLinkedList.printList())

// myLinkedList.insert(6, 70);
// console.log('myLinkedList', myLinkedList.printList())

// myLinkedList.insert(6, 60);
// console.log('myLinkedList', myLinkedList.printList())

// myLinkedList.insert(4, 50);
// console.log('myLinkedList', myLinkedList.printList())

// Andrei test case - insert
console.log('myLinkedList', myLinkedList.insert(2, 99));
console.log('myLinkedList', myLinkedList.insert(20, 88));
console.log('myLinkedList', myLinkedList.insert(0, 77));

// my test case - remove
console.log('myLinkedList', myLinkedList.remove(2));