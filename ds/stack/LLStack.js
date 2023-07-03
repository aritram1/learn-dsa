class Stack {
  Node = class{
    val;next;
    constructor(val){
      this.val = val;
      this.next = null;
    }
  }

  top;
  isEmpty(){
    return this.top === null;
  }

  add(val){
    let current = new Node(val);
    if(this.isEmpty()) this.top = current;
    else{
      let last = this.top;
      current.next = last;
      this.top = current;
    }
  }

  remove(){
    if(this.isEmpty()) return 'Nothing to remove!';
    let last = this.top;
    this.top = last.next;
  }
  
  peek() {
    if (this.isEmpty()){
      console.log('Nothing to peek');
      return;
    }
    return this.top;
  }

  traverse() {
    if (this.isEmpty()){
      console.log('Nothing to traverse');
      return;
    }
    let current = this.top;
    while(current){
      console.log(current.val);
      current = current.next;
    }
  }

  search(val) {
    let found = false;
    if (this.isEmpty()){
      console.log('Nothing to search');
      return;
    }
    let current = this.top;
    while(current){
      if(current.val === val){
        // console.log(`${current.val} found!`);
        found = true;
        break;
      }
      current = current.next;
    }
    let t = found ? `${val} is found` : `${val} is not found`;
    console.log(t);
  }
}
module.exports = Stack;
