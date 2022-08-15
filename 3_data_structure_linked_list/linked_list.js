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

  insert(index, value) {

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

// myLinkedList.insert(2, 99);
// console.log('myLinkedList', myLinkedList.printList())