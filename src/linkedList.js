import Node from "./nodes.js";

class LinkedList {
  constructor() {
    if (!new.target) {
      return new LinkedList();
    }
    this.headNode = Node();
    this.tailNode = Node();
    this.headNode = this.tailNode;
  }

  append(value) {
    let newNode = Node();
    newNode.setValue(value);
    if (this.tail().getValue() === null) {
      this.headNode = newNode;
    } else {
      this.tailNode.setNeighbour(newNode);
    }

    this.tailNode = newNode;
  }

  size() {
    let count = 0;
    let nodePointer = this.head();
    while (nodePointer !== this.tail()) {
      count++;
      nodePointer = nodePointer.getNeighbour();
    }
    count++;
    return count;
  }

  prepend(value) {
    let newNode = Node();
    newNode.setValue(value);
    newNode.setNeighbour(this.head());
    this.headNode = newNode;
  }

  head() {
    return this.headNode;
  }

  tail() {
    return this.tailNode;
  }

  pop() {
    if (this.tail().getValue() === null) return;
    let nodePointer = this.head();
    while (nodePointer.getNeighbour() !== this.tail()) {
      nodePointer = nodePointer.getNeighbour();
    }
    nodePointer.setNeighbour(null);
    this.tailNode = nodePointer;
  }

  at(index) {
    if (index >= this.size()) {
      console.log(
        "index surpasses list size, last index in this list is: ",
        this.find(this.tail().getValue())
      );
      return this.tail();
    }

    let nodePointer = this.head();
    let count = 0;
    while (count < index) {
      nodePointer = nodePointer.getNeighbour();
      count++;
    }
    return nodePointer;
  }

  contains(value) {
    if (this.head().getValue() === value) {
      return true;
    } else {
      let nodePointer = this.head();
      while (nodePointer.getNeighbour() !== this.tail()) {
        nodePointer = nodePointer.getNeighbour();
        if (nodePointer.getValue() === value) {
          return true;
        }
      }
      if (nodePointer.getNeighbour().getValue() === value) {
        return true;
      }
      return false;
    }
  }

  find(value) {
    if (this.head().getValue() === value) {
      return 0;
    } else {
      let nodePointer = this.head();
      let count = 0;
      while (nodePointer.getNeighbour() !== this.tail()) {
        nodePointer = nodePointer.getNeighbour();
        count++;
        if (nodePointer.getValue() === value) {
          return count;
        }
      }
      if (nodePointer.getNeighbour().getValue() === value) {
        return ++count;
      }
      return null;
    }
  }

  toString() {
    let nodePointer = this.head();
    let listString = `( ${nodePointer.getValue()} ) `;
    while (nodePointer.getNeighbour() !== this.tail()) {
      nodePointer = nodePointer.getNeighbour();
      listString = listString + ` -> ( ${nodePointer.getValue()} )`;
    }
    listString = listString + ` -> (${this.tail().getValue()} )`;
    return listString;
  }

  insertAt(value, index) {
    if (!this.contains(value)) {
      if (this.size() - 1 === index) {
        this.append(value);
      } else {
        let predecessor = this.at(index - 1);
        let newNode = Node();
        newNode.setValue(value);
        newNode.setNeighbour(predecessor.getNeighbour());
        predecessor.setNeighbour(newNode);
      }
    }
  }

  removeAt(index) {
    let nodePointer = this.at(index);
    if (index === 0) {
      this.headNode = nodePointer.getNeighbour();
    } else {
      let predecessor = this.at(index - 1);
      predecessor.setNeighbour(nodePointer.getNeighbour());
    }
    nodePointer.setNeighbour(null);
  }
}

export default LinkedList;
