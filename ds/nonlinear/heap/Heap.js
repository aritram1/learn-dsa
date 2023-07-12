import Node from '../../../util/node.js';
export default class Heap {
  
  top; count; // To make the total element/node count handy
  isEmpty(){
    return this.top === null;
  }

  add(val){
    let current = new Node(val);
    // If the stack is empty return nothing
    if(this.isEmpty()) this.top = current;
    else{
      let last = this.top;
      current.next = last;
      this.top = current;
      this.count++;   
    }
  }

  remove(){
    // if the stack is empty, return nothing
    if(this.isEmpty()) return 'Nothing to remove!';
    let last = this.top; // else get the top node and return its value
    this.top = this.top.next; // and set the `top` refrence to the removed node's next node
    this.count--;
    return last.value;
  }
  
  // peek gives the next to data to remove without actually removing it
  peek() {
    return !this.isEmpty() ? this.top : 'Nothing to peek';
  }

  // trverse the stack
  traverse(print) {
    if (this.isEmpty()){
      console.log('Nothing to traverse');
      return;
    }
    let current = this.top;
    while(current){
      if(print) console.log(current.val);
      current = current.next;
    }
  }

  // searching a value in stack requires move from top to bottom
  // O(n)
  search(val) {
    let found = false;
    if (this.isEmpty()){
      console.log('Nothing to search');
      return;
    }
    let current = this.top;
    while(current){
      if(current.val === val){
        found = true;
        break;
      }
      current = current.next;
    }
    console.log(found ? `${val} is found in Stack` : `${val} is not found in Stack!`);
  }
}