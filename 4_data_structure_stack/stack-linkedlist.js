class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    // const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    // return holdingPointer;
    return this;
  }
  //isEmpty
}

const myStack = new Stack();

console.log('myStack.push("Google")', myStack.push("Google"));
console.log('myStack.push("Udemy")', myStack.push("Udemy"));
console.log('myStack.push("Discord")', myStack.push("Discord"));
console.log(myStack.peek());
console.log('myStack.pop()', myStack.pop());
console.log('myStack.pop()', myStack.pop());
console.log('myStack.pop()', myStack.pop());

//Discord
//Udemy
//google
