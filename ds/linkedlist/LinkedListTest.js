import util from '../../util/util.js';
import SingleLinkedList from "./SingleLinkedList.js";
const timeIt = new util().timeIt;

export default class LinkedListTest{
    static run(batchSize){
        let result = {};
        let newValue = batchSize + 1;

        let ll = new SingleLinkedList();
        console.log('Size : ' + batchSize.toLocaleString());
        ll.init(batchSize);
        
        // traverse
        let start = Date.now();
        ll.traverse();
        result['Traverse'] = Date.now() - start;
        
        // add
        start = Date.now();
        ll.add(newValue);
        result['Add'] = Date.now() - start;
        
        // search
        start = Date.now();
        ll.search(newValue);
        result['Search'] = Date.now() - start;
        
        // remove
        start = Date.now();
        ll.remove(newValue);
        result['Remove'] = Date.now() - start;

        return result;
    }
}