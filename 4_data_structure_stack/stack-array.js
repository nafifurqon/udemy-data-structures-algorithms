class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this.array;
  }

  pop() {
    this.array.pop();
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
