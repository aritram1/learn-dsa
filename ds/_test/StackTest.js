import util from '../../util/util.js';
import Stack from "../linear/stack/Stack.js";
const timeIt = new util().timeIt;
const populateWithData = new util().populateWithData;

export default class LinkedListTest{
    static run(batchSize){
        let result = {};
        let newValue = batchSize + 1;

        let stack = new Stack();
        let start = Date.now();
        stack = populateWithData(stack, batchSize);
        result['Init'] = Date.now() - start;

        // add
        start = Date.now();
        stack.add(newValue);
        result['Add'] = Date.now() - start;
        
        // remove
        start = Date.now();
        stack.remove(newValue);
        result['Remove'] = Date.now() - start;

        // traverse
        start = Date.now();
        stack.traverse();
        result['Traverse'] = Date.now() - start;
        
        // search
        start = Date.now();
        stack.search(newValue);
        result['Search'] = Date.now() - start;

        return result;
    }
}