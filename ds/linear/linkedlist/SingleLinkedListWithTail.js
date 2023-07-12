import Node from '../../../util/node.js';
export default class SingleLinkedList{
  
  // Create class level properties
  constructor(){
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  // To check if the LL is empty
  isEmpty(){
    return (this.tail == null || this.head == null);
  }

  traverse(print) {
    let all = [];
    let index = this.tail;
    while(index){
      all.push(index.val);
      index = index.next;
    }
    if(print) console.log(all.join(','));
  }

  // Add a value to a linked list
  add(val) {
    // if the LL is empty, add the node as first node
    if(this.isEmpty()){
      let firstNode = new Node(val);
      this.head = firstNode;
      this.tail = firstNode;
    }
    // else
    else{
      while(true){ // keep traversing till last
        if(this.head.next) 
          this.head = this.head.next;  //  move on
        else{                                             
          this.head.next = new Node(val);// finally add the node
          break;
        }
      }
    }
    this.length++; //increment the LL length
    return val;
  }

  remove(val) {
    // If the LL is empty nothing to remove
    if(this.isEmpty()){
      console.log('nothing to remove');
      return;
    }
    // If the first value is getting removed, reposition the `tail` and decrease the length
    else if(this.tail.val == val){
      this.tail = this.tail.next;
      this.length--;
    }
    // Else keep traversing next. Once match is found the previous index's left is set as current index's left
    // This keeps the current index node dereferenced, like it exists in program but is not referred anymore.
    // Will be garbage-collected by gc later.
    else{
      let prevIndex = this.tail;
      let index = this.tail.next;
      while(index){
        if(index.val == val){
          console.log(`${val} is successfully removed!`);
          prevIndex.next = index.next;  // dereferences the matched node from the LL
          this.length--;
          break;
        }
        else{
          // The index and previIndex keep 2 adjacent references handy
          prevIndex = index;  
          index = index.next;
        }
      }
    }
  }

  search(val) {
    let index = this.tail;
    let found;
    while(index){
      if(index.val == val){
        found = index;
        break;
      }
      index = index.next;
    }
    console.log(found ? `${val} is found in LL` : `${val} is not found in LL`);
  }

}