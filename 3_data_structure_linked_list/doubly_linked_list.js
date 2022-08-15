class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
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
    const leader = this.traverseToIndex(index - 1); //99
    const unwantedNode = leader.next; //10
    unwantedNode.next.prev = leader;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  // if linked list = 1 -> 99 -> 5 -> 16
  // should be = 16 -> 5 -> 99 -> 1
  reverse() {
    if (this.length === 1) {
      return this.head;
    }

    let currentNode = this.tail;
    while (currentNode !== null) {
      if (currentNode.next === null) {
        this.head = currentNode;
      } else if (currentNode.prev === null) {
        this.tail = currentNode;
      }

      const temp = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = temp;
      currentNode = temp;
    }
    return this;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
console.log("myDoublyLinkedList", myDoublyLinkedList.insert(1, 99));
console.log("myDoublyLinkedList", myDoublyLinkedList.remove(2));

console.log("myDoublyLinkedList", myDoublyLinkedList.reverse());
console.log('myDoublyLinkedList', myDoublyLinkedList.printList())
