const { Timestamp } = require("mongodb");

class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
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

    // console.log(newNode)
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    // console.log(this.head)
  }
  printList() {
    const arr = [];
    console.log(arr);
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
  insert(index, value) {
    let currentNode = 0;
    let head = this.head;
    let insertNode = { value: value, next: null };
    while (head !== null) {
      if (index === currentNode - 1) {
        insertNode.next = head.next;
      }
      head = head.next;
    }
  }
  remove(index) {
    let head = this.head;
    let currentNode = 0;
    let tempAddres;
    // console.log(head);
    while (currentNode <= index) {
      // console.log("hello");

      // console.log(head);
      // currentNode++;
      // head = head.next;
      // console.log("mango");
      if (currentNode == index - 1) {
        tempAddres = head;
        // console.log(tempAddres, "devide", head.next, "1");
      }
      if (currentNode == index) {
        tempAddres.next = head.next;

        // console.log(tempAddres, "divie", head.next, "2");
        // console.log(this.head);
        return;
      }
      head = head.next;
      currentNode++;
    }
  }

  reverse() {
    console.log(this.head);
    let tempArr = [];
    let head = this.head;
    while (head !== null) {
      tempArr.push(head);
      head = head.next;
    }
    console.log(tempArr);
    let tempNode;
    // let tempHead;
    for (let i = tempArr.length - 1; i >= 1; i--) {
      console.log(i);
      if (i == tempArr.length - 1) {
        var tempHead = tempArr[i];
        tempHead.next = tempArr[i - 1];
        tempNode = tempArr[i - 1];
        if (i == 1) {
          tempNode.next = null;
        }
        // console.log(tempHead, "tempHead");
      } else {
        // console.log(tempNode, "tempNode");
        tempNode.next = tempArr[i - 1];
        tempNode = tempArr[i - 1];
        if (i == 1) {
          tempNode.next = null;
        }
      }
      // head=tempArr[i];
      // head.next=tempArr[i-1]
      // this.head=head;
      // console.log(tempArr[i]);
    }
    this.head = tempHead;
    // console.log(tempHead);

    // console.log(tempArr, tempArr.length);
  }
}
const myLinkedList = new LinkedList(7);

myLinkedList.append(8);
myLinkedList.append(3);
myLinkedList.prepend(5);
myLinkedList.prepend(9);
console.log(myLinkedList.printList());
// myLinkedList.remove(3);
console.log(myLinkedList.printList());
myLinkedList.reverse();
myLinkedList.printList();
// console.log(myLinkedList);
