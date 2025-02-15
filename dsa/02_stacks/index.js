// Stack implementaion using linkedlist
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

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
    } else {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
      this.length++;
    }
  }
  pop() {
    console.log(this.top, this.bottom, "before");
    if (!this.top) {
      //   this.bottom = null;
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    console.log(this.top, this.bottom);
    // console.log(this.top);
    this.top = this.top.next;
    this.length--;
    // console.log(this.top);
  }
  peek() {
    return this.top;
  }
}

// const myStack = new Stack();
// myStack.push(5);
// myStack.push(7);
// myStack.push(9);
// // myStack.pop();
// console.log(myStack.pop());
// // console.log(myStack.pop());
// console.log(myStack);
// console.log(myStack.peek(), "peek");

//Stack implementaion using array

class Arraystack {
  constructor() {
    this.top = [];
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    if (this.length == 0) {
      this.bottom = value;
      this.top[0] = value;
    } else {
      this.top.unshift(value);
    }

    this.length++;
    // this.top[this.top.length] = value;

    return this.top;
  }
  pop() {
    if (this.length == 1) {
      this.bottom = null;
    }
    this.top.splice(0, 1);
    this.length--;
    return this;
  }
  peek() {
    if (this.length > 0) {
      return this.top[0];
    } else {
      return null;
    }
  }
}
const myStack = new Arraystack();
myStack.push(5);
myStack.push(9);
myStack.pop();
myStack.push(9);
console.log(myStack.peek());

// myStack.pop();

console.log(myStack);
