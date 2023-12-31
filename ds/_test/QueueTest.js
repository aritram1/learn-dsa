import util from '../../util/util.js';
import Queue from '../linear/queue/Queue.js';
const timeIt = new util().timeIt;
const populateWithData = new util().populateWithData;

export default class QueueTest{
    static run(batchSize){
        let result = {};
        let newValue = -1;

        let q = new Queue();
        let start = Date.now();
        q = populateWithData(q, batchSize);
        result[`Init(${batchSize.toLocaleString()})`] = Date.now() - start;
        
        // add
        start = Date.now();
        q.add(newValue);
        result['Add'] = Date.now() - start;
        
        // remove
        start = Date.now();
        q.remove(newValue);
        result['Remove'] = Date.now() - start;

        // traverse
        start = Date.now();
        q.traverse();
        result['Traverse'] = Date.now() - start;
        
        // search
        start = Date.now();
        q.search(newValue);
        result['Search'] = Date.now() - start;

        return result;
    }
}