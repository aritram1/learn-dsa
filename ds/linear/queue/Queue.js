import Node from '../../../util/node.js';
export default class Queue {
  Queue() {
    this.head = null;
    this.tail = null;
    this.debug = false;
    this.length = 0;
  }

  isEmpty(){
    return this.head == null;
  }

  // default behavior is to add at the end
  add(val) {
    let newNode = new Node(val);
    let last = this.tail;
    if(last) last.next = newNode;
    this.tail = newNode;
    this.length++;
    if(this.debug) console.log(val + ' added');
  }

  traverse(){
    let index = this.head;
    while(index){
      if(this.debug) console.log(index.val);
      index = index.next;
    }
  }

  remove() {
    if(this.isEmpty()) return;
    let first = this.head;
    this.head = first.next;
    this.length--;
    return first.val;
  }

  peek(){
    return this.head;
  }

  search(val) {
    let matchingNode;
    let found = false;
    let index = this.head;
    while(index){
      if(index.val == val){
        matchingNode = index;
        found = true;
        break;
      }
      index = index.next;
    }
    console.log(found ? `${val} is found in Queue` : `${val} is not found in Queue`);
    return matchingNode;
  }
}