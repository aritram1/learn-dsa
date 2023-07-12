import Node from '../../../util/node.js';
export default class SingleLinkedList{
  
  // Create class level properties
  constructor(){
    this.head = null;
    this.length = 0;
    this.debug = false;
  }

  // To check if the LL is empty
  isEmpty(){
    return this.head == null;
  }

  // add a value to a linked list based on `pos` parameter
  add(val, pos) {
    if(pos && pos <= 0) return; 
    if(this.isEmpty() || (!this.isEmpty() && pos == 1))   // add at beginning if list is empty or pos is 1
      this.addAtBeginning(val);
    else
      this.addAtPosition(val, pos);                       // add at defined position otherwise
  }

  // Add a value to the LL - at beginning
  addAtBeginning(val){
    let newNode = new Node(val);
    let headNode = this.head;
    newNode.next = headNode;
    this.head = newNode;
  }

  // Add a value to a linked list - positionally
  addAtPosition(val, pos){
    if(this.debug) console.log(val + 'is being considered!');
    let prev = null;
    let index = this.head;
    let newNode = new Node(val);
    if(this.debug) console.log('first statement for' + val);
    let count = 1;
    while(true){
      if(count == pos || !index){
        prev.next = newNode;
        newNode.next = index;
        break;
      }
      else{
        count++;
        prev = index;
        index = index.next;
      }
    }
    
  }

  remove(val) {
    let index = this.head;              // initially index is the head
    if(this.isEmpty()){                 // List is empty
      if(this.debug) console.log('nothing to remove');
      return;
    }
    if(!index.next && index.val == val){                    // List has only 1 element
      this.head = null;
      if(this.debug) console.log(index.val + ' is removed!');
      return index.val;
    }
    while(index.next){                  // Traverse the linked list if this is not the matching node
      if(index.next.val == val){
        index.next = index.next.next;   // When `next` element matches, link previous element's next to index.next.next
        break;
      }
      index = index.next;
    }
  }

  traverse(print) {
    let all = [];
    let index = this.head;
    while(index){
      all.push(index.val);
      index = index.next;
    }
    if(this.debug || print) console.log(all.join(','));
  }

  search(val) {
    let index = this.head;
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