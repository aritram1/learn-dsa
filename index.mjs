const TOTAL = 5000000;

import BinarySearchTree from "./ds/tree/05BinarySearchTree.js";

let bst = new BinarySearchTree();
bst.add(12);
bst.add(15);
bst.add(17);
bst.add(1);
bst.add(19);
bst.traverse('preorder');
console.log('bst.root-->' + bst.root.val);

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
let then = Date.now();

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
