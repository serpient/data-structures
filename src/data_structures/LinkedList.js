class LinkedList {
  constructor() {
    this.head = null;
  }
  getHead() {
    return this.head;
  }
  getNext(item) {
    return item.next;
  }
  getLastNode() {
    let currNode = this.head;
    if (!currNode) {
      return null;
    }
    while (currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  }
  pop() {
    // removes last element from list
    if (!this.head || !this.head.next) {
      // if list is empty or only has 1 item
      this.head = null;
    } else {
      let lastNode = this.getLastNode();
      let prevNode = lastNode.prev;
      prevNode.next = null
    }
  }
  push(item) {
    // adds element to end of list
    let node = {
      prev: null,
      item,
      next: null
    };
    if (!this.head) {
      // no head
      this.head = node;
      return;
    }
    // transverse from head through list until you reach a null next
    let lastNode = this.getLastNode();
    lastNode.next = node;
    node.prev = lastNode;
  }
  shift() {
    let hasHead = this.head;
    let hasMoreThanOneNode = hasHead && this.head.next;
    // removes first item in list
    if (!hasHead || !hasMoreThanOneNode) {
      // a empty or a list with 1 item
      this.head = null;
    } else {
      let nextNode = this.head.next;
      nextNode.prev = null;
      this.head = nextNode;
    }
  }
  unshift(item) {
    // adds item to beginning of list
    let currHead = this.head;
    let node = {
      prev: null,
      item,
      next: currHead
    };
    if (currHead) {
      currHead.prev = node;
    }
    this.head = node;
  }
  printAllItems() {
    console.log('=============')
    let currNode = this.head;
    while (currNode.item) {
      console.log(currNode.item);
      if (!currNode.next) {
        return;
      }
      currNode = currNode.next;
    }
  }
  unlink(node) {
    if (!node.prev) {
      // removing from head
      this.shift();
    } else if (!node.next) {
      // removing from tail
      this.pop();
    } else {
      // remove node from middle of list
      let prevNode = node.prev;
      let nextNode = node.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }

    node.prev = null;
    node.next = null;

    return node;
  }
  insertprev(node, newNode) {
    if (!node.prev) {
      // at head of list
      this.unshift(newNode.item);
    } else {
      let prevNode = node.prev;

      prevNode.next = newNode;
      newNode.prev = prevNode;

      newNode.next = node;
      node.prev = newNode;
    }
  }
  insertAfter(node, newNode) {
    if (!node.next) {
      // at end of list
      this.push(newNode.item);
    } else {
      let nextNode = node.next;

      node.next = newNode;
      newNode.prev = node;

      newNode.next = nextNode;
      nextNode.prev = newNode;
    }
  }
  parseFirstOf(item) {
    if (typeof item === "string") {
      return item.toLowerCase().charCodeAt(0);
    }
    return item;
  }
  sort() {
    if (!this.head || !this.head.next) {
      return false;
    }
    let currNode = this.head.next;

    let swapCount = 0;
    while (currNode.next) {
      let nextNode = currNode.next;
      if (
        currNode.prev &&
        this.parseFirstOf(currNode.item) < this.parseFirstOf(currNode.prev.item)
      ) {
        let prevNode = currNode.prev;
        let node = this.unlink(currNode);
        this.insertprev(prevNode, node);
        console.log(`insert ${node.item} prev ${prevNode.item}`);
        swapCount++;
      }
      currNode = nextNode;
    }
    if (swapCount !== 0) {
      return this.sort();
    }
    return;
  }
  sortRecursively() {
    if (!this.head || !this.head.next) {
      return false;
    }
    let currNode = this.head.next;
    let swapCount = 0;
    while (currNode.next) {
      this.printAllItems();
      let nextNode = currNode.next;
      if (
        currNode.prev &&
        this.parseFirstOf(currNode.item) < this.parseFirstOf(currNode.prev.item)
      ) {
        let prevNode = currNode.prev;
        let node = this.unlink(currNode);
        this.insertprev(prevNode, node);
        console.log(`insert ${node.item} prev ${prevNode.item}`);
        swapCount++;
      }
      currNode = nextNode;
    }
    if (swapCount !== 0) {
      return this.sort();
    }
    return;
  }
  includes(item) {
    // checks to see if an item is included in the list
    let currNode = this.head;
    while (currNode.item) {
      if (currNode.item === item) {
        return true;
      }
      if (!currNode.next) {
        return false;
      }
      currNode = currNode.next;
    }
  }
}

export default LinkedList;

// const list = new LinkedList();
// list.push("zero");
// list.push("one");
// console.log(list.getLastNode());
// list.pop();
// console.log(list.getLastNode());
// list.push("one");
// list.push("two");
// list.shift();
// console.log(list.getHead());
// list.unshift("zero");
// console.log(list.getHead());
// console.log(list.includes('zero'));
// list.push("z");
// list.push("k");
// list.push("g");
// list.push("f");
// list.push("e");
// list.push("d");
// list.push("a");
// list.printAllItems();

// list.unlink(list.head.next);
// list.printAllItems();
// console.log("================");
// list.sort();

// list.printAllItems();
