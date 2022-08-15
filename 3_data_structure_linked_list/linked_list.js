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
    if (index  > this.length + 2 || index  < 0) {
      return `Please return a valid index between 0-${this.length + 1}`;
    }

    if (index === 0) {
      return this.prepend(value);
    }

    if (index === this.length + 1) {
      return this.append(value);
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null) {
      if (currentIndex === index - 1) {
        const newNode = new Node(value);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }

      currentNode = currentNode.next;
      currentIndex++;
    }

    return this;
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

myLinkedList.insert(0, 90);
console.log('myLinkedList', myLinkedList.printList())

myLinkedList.insert(1, 80);
console.log('myLinkedList', myLinkedList.printList())

myLinkedList.insert(6, 70);
console.log('myLinkedList', myLinkedList.printList())

myLinkedList.insert(6, 60);
console.log('myLinkedList', myLinkedList.printList())

myLinkedList.insert(4, 50);
console.log('myLinkedList', myLinkedList.printList())