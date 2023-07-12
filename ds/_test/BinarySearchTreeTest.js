import BinarySearchTree from "./ds/tree/05BinarySearchTree.js";
import util from './util/util.js';
let timeIt = new util().timeIt;

export default class test{
    run(total){       
        let bst = new BinarySearchTree();
        let count = 0;
        while(count < total){
            bst.add(Math.round(Math.random() * 100));
            count++ ;
        }
        bst.traverse('preorder');
        console.log('bst.root-->' + bst.root.val);
    }
}