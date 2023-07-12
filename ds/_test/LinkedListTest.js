import util from '../../util/util.js';
import SingleLinkedList from "../linear/linkedlist/SingleLinkedList.js";
const timeIt = new util().timeIt;
const populateWithData = new util().populateWithData;

export default class LinkedListTest{
    static run(batchSize){
        let result = {};
        let newValue = batchSize + 1;

        let ll = new SingleLinkedList();
        console.log('Size : ' + batchSize.toLocaleString());
        ll = populateWithData(ll, batchSize);
        
        // add
        let start = Date.now();
        ll.add(newValue);
        result['Add'] = Date.now() - start;
        
        // remove
        start = Date.now();
        ll.remove(newValue);
        result['Remove'] = Date.now() - start;

        // traverse
        start = Date.now();
        ll.traverse();
        result['Traverse'] = Date.now() - start;
        
        // search
        start = Date.now();
        ll.search(newValue);
        result['Search'] = Date.now() - start;

        return result;
    }
}