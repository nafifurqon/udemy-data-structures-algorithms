// 10 -> 5 -> 16

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
    const newList = {
      value: value,
      next: null,
    }

    const currentTail = this.tail;
    currentTail.next = newList;

    this.tail = newList;
    this.length++;
    return newList;
  }
}

const myLinkedList = new LinkedList(10);
console.log('myLinkedList', myLinkedList)

myLinkedList.append(5);
console.log('myLinkedList', myLinkedList)

myLinkedList.append(16);
console.log('myLinkedList', JSON.stringify(myLinkedList, null, 4))