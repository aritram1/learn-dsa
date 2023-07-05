export default class Node {
    // left;right;val;desc;
    constructor(val){
        this.left = null;
        this.right = null;
        this.prev = null;
        this.next = null;
        this.val = val;
        this.desc = '';
    }
}