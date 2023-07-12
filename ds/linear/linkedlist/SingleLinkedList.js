import Node from '../../../util/node.js';
export default class SingleLinkedList{
  
  // Create class level properties
  constructor(){
    this.head = null;
    this.length = 0;
  }

  // To check if the LL is empty
  isEmpty(){
    return this.head == null;
  }

  // Add a value to a linked list
  add1(val, position) {
    let newNode = new Node(val);
    let count = 1;
    let index = this.head;
    //early return statements for invalid position value and if the list is empty
    if(position && position <= 0) return;
    //console.log(val + ' is considered');
    if(this.isEmpty()){
      //console.log(val + 'the LL is empty');
      this.head = newNode;
      //console.log(val + ' is added now.');
      return;
    }
    //console.log('COUNT:' + count);
    while(true){
        //console.log(val + 'the LL has ' + count + ' elements');
        if(!index.next){        // List has one node only
          //console.log(val + ' List has one node only');
          //console.log(val + 'position is present' + position);
          if(position == 1){
            this.head = newNode;
            newNode.next = index;
            //console.log(val + ' is added at the start.');
          }
          else{
            index.next = newNode;
            //console.log(val + ' is added at the end.');
          }
          count = count + 1;
          //console.log('1count incremented to ' + count);
          break;
        }
        else{
          if(position == count){
            newNode.next = index.next;
            count++;
            break;
          }
          else{
            index = index.next;
            count++;
            if(!index) break;
          } 
          
        }
      
    }
  }

  add(val, pos){
    //console.log(val + 'is being considered!');
    let prev = null;
    let index = this.head;
    
    if(pos && pos <= 0) return;
    let newNode = new Node(val);
    if(this.isEmpty()){
      //console.log('The LL is empty');
      this.head = newNode;
      return;
    }
    else{
      if(pos == 1){
        let first = this.head;
        newNode.next = first;
        this.head = newNode;
        //console.log(val + ' is added at the start');
      }
      else{
        //console.log('first statement for' + val);
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
    }
  }

  remove(val) {
    let index = this.head;              // initially index is the head
    if(this.isEmpty()){                 // List is empty
      //console.log('nothing to remove');
      return;
    }
    if(!index.next){                    // List has only 1 element
      if(index.val == val){
        this.head = null;
        return;
      }
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
    if(print){
      //console.log(all.join(','));
    }
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

// let a = new SingleLinkedList();
// a.add(12);
// a.traverse(true);
// a.add(177,1);
// a.traverse(true);
// a.add(167,1);
// a.traverse(true);
// a.add(57,1);
// a.traverse(true);
// a.add(47,1);
// a.traverse(true);
// a.add(21,10);
// //a.remove(12);
// a.traverse(true);