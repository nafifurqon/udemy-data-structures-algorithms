class Stack {
  constructor() {
    this.array = [];
    this.length = this.array.length;
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array[this.length] = value;
    this.length++;

    return this.array;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const deletedItem = this.array[this.length - 1];
    delete this.array[this.length - 1];
    this.length--;
    return deletedItem;
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
