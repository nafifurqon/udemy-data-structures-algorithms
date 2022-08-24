class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
		return this.first;
  }

  enqueue(value){
		const newNode = new Node(value);

		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		this.length++;
		return this;
  }

  dequeue(){
		if (!this.first) {
      return null;
    }

		if (this.first === this.last) {
			this.last = null;
		}

		// const holdingPointer = this.first;
		this.first = this.first.next;
		this.length--;
		// return holdingPointer;
		return this;
  }

  isEmpty() {
		return this.length === 0 ? true : false;
	}
}

const myQueue = new Queue();

console.log('myQueue.peek()', myQueue.peek())
console.log('myQueue.enqueue("Joy")', myQueue.enqueue("Joy"))
console.log('myQueue.enqueue("Matt")', myQueue.enqueue("Matt"))
console.log('myQueue.enqueue("Pavel")', myQueue.enqueue("Pavel"))
console.log('myQueue.enqueue("Samir")', myQueue.enqueue("Samir"))
console.log('myQueue.dequeue()', myQueue.dequeue())
console.log('myQueue.dequeue()', myQueue.dequeue())
console.log('myQueue.dequeue()', myQueue.dequeue())
console.log('myQueue.dequeue()', myQueue.dequeue())

//Joy
//Matt
//Pavel
//Samir