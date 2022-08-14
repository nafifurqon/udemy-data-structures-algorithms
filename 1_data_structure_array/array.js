class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lasttItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lasttItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for(let i = index;i < this.length - 1;i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
console.log("newArray", newArray);
console.log("newArray.get(0)", newArray.get(0));

newArray.push("hi");
newArray.push("you");
newArray.push("!");
console.log("newArray", newArray);

newArray.pop();
console.log("newArray", newArray);

newArray.delete(1);
console.log("newArray", newArray);

newArray.push('are');
console.log('newArray', newArray);