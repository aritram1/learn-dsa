let then = Date.now();

const TOTAL = 5000000;

import Stack from "./ds/stack/ArrayStack.js";
import util from './util/util.js';
let logTime = util.logTime;

logTime("import", then);
then = Date.now();

let stack = new Stack();
let count = 0;
logTime("variable load", then);
then = Date.now();

//add 
while (count < TOTAL) {
  stack.push(count);
  count++;
}
logTime("add", then);
then = Date.now();

//search
stack.search(-23); 
logTime("search", then);

while (count < TOTAL) {
  //add
  stack.push(count);
  count++;
}
logTime("pop", then);
then = Date.now();
