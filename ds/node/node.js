export default class SmartNode {
    constructor(val){
        this.val = val; // for all ds
        this.desc = ''; // for all ds, optional

        this.left = null; // for tree only
        this.right = null;// for tree only
        
        this.prev = null; // for ll, queue, stack, heap ds
        this.next = null; // for ll, queue, stack, heap ds
        this.position = null; // for ll, queue, stack, heap ds
    }
}