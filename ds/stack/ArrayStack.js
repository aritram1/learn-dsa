class Stack {
  top;
  data;

  constructor() {
    //console.log("Stack is just created. It is now empty? " + this.isEmpty());
    this.data = [];
  }

  push(val) {
    this.data.length++; // increase the array
    this.data[this.data.length - 1] = val; // set value as last value
    this.top = val; // set value as top as well
    //console.log(val + " added");
    this.traverse();
  }

  pop() {
    if (this.isEmpty()) return "Nothing to pop";
    let currentTop = this.top; // get the current top
    this.data.length--; // decrease the array
    this.top = this.data[this.data.length - 1]; // set new top value
    //console.log(`${currentTop} popped`);
    this.traverse();
    return currentTop; // return the popped value
  }

  peek(val) {
    //optional param
    if (this.isEmpty()) return "Nothing to peek";
    //console.log(`${this.top} peeked`);
    this.traverse();
    return this.top;
  }

  traverse() {
    //console.log(this.data); //, `Top:${this.top} length:${this.data?.length}`);
  }

  isEmpty() {
    return !(this.data?.length > 0);
  }

  search(val) {
    let index = 0;
    let matchingIndex = -1;
    while (index < this.data.length) {
      if (this.data[index] == val) {
        matchingIndex = index;
        break;
      }
      index++;
      //else continue;
      //console.log("I am not printed");
      //index++;
    }

    matchingIndex === -1
      ? console.log("Match not found")
      : console.log(`Match found at element ${matchingIndex + 1}`);

    return matchingIndex;
  }
}
module.exports = Stack;
