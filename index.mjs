let then = Date.now();

const TOTAL = 5000000;

import Stack from "./ds/01Stack.js";
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

stack.search(count); //search
logTime("search", then);

while (count < TOTAL) {
  //add
  stack.push(count);
  count++;
}
logTime("pop", then);
then = Date.now();

// Util function
function logTime(task, then) {
  console.log(`${task} took ${Date.now() - then}ms`);
}
