const batchSize = Math.pow(10, 4);
let result = {};
console.log(`Batch Size => ${batchSize.toLocaleString()}, Time in miliseconds.`);

// Test LinkedList perf
import LinkedListTest from './ds/_test/LinkedListTest.js';
result['SLL'] = LinkedListTest.run(batchSize);

// Test Queue performance
import QueueTest from './ds/_test/QueueTest.js'; 
result['Queue'] = QueueTest.run(batchSize);

// Test Stack performance
import StackTest from './ds/_test/StackTest.js';
result['Stack'] = StackTest.run(batchSize);

console.table(result);