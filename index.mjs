const batchSize = Math.pow(10, 7);

// Test LinkedList perf
import LinkedListTest from './ds/linkedlist/LinkedListTest.js';
let result = LinkedListTest.run(batchSize);
result['Batch Size'] = batchSize;
console.table(result);

// import TreeTest from './ds/tree/test.js';
// TreeTest.run(batchSize);
































































































































// import util from './util/util.js';
// let logTime = util.logTime;

// logTime("import", then);
// then = Date.now();

// let stack = new Stack();
// let count = 0;
// logTime("variable load", then);
// then = Date.now();

// //add 
// while (count < TOTAL) {
//   stack.push(count);
//   count++;
// }
// logTime("add", then);
// then = Date.now();

// //search
// stack.search(-23); 
// logTime("search", then);

// while (count < TOTAL) {
//   //add
//   stack.push(count);
//   count++;
// }
// logTime("pop", then);
//let then = Date.now();

// let then = Date.now();

// const TOTAL = 5000000;

// import Stack from "./ds/stack/ArrayStack.js";
// import util from './util/util.js';
// let logTime = util.logTime;

// logTime("import", then);
// then = Date.now();

// let stack = new Stack();
// let count = 0;
// logTime("variable load", then);
// then = Date.now();

// //add 
// while (count < TOTAL) {
//   stack.push(count);
//   count++;
// }
// logTime("add", then);
// then = Date.now();

// //search
// stack.search(-23); 
// logTime("search", then);

// while (count < TOTAL) {
//   //add
//   stack.push(count);
//   count++;
// }
// logTime("pop", then);
// then = Date.now();
