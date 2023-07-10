import Node from '../node/node.js';
export default class Queue {
  Queue() {
    this.head = null;
    this.tail = null;
  }

  // default behavior is to add at the end
  add(val) {
    let newNode = new Node(val);
    newNode.desc = newNode.desc ? newNode.desc + 1 : 1;
    if(this.isEmpty()){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      let currentTail = this.tail;
      currentTail.next = newNode;
      this.tail = newNode;
    }
  }

  traverse(){
    let index = this.head;
    while(index){
      console.log(indexs);
      index = index.next;
    }
  }

  remove() {
    if(this.isEmpty()) return;
    let nodeToRemove = this.head;
    if(this.head == this.tail){
      this.head = null;
      this.tail = null;
    }
    else{
      this.head = nodeToRemove.next;
    }
    return nodeToRemove.val;
  }

  peek(){
    return this.head;
  }

  search(val) {
    let matchingNode;
    let index = this.head;
    while(index){
      if(index.val == val){
        matchingNode = index;
        break;
      }
      index = index.next;
    }
    return matchingNode;
  }

  isEmpty(){
    return this.head == null;
  }
}