class BinarySearchTree {
  BinarySearchTree(){
    this.root = null;
    this.nodes = 0;
  }

  ListNode = class{
    constructor(val){
      this.left = null;
      this.right = null;
      this.val = val;
      this.desc = '';
    }
  }

  traverse(type){
    if(type == 'preorder') this.traversePreorder(this.root);
  }

  traversePreorder(node) {
    if(!node) return;
    console.log(node.val);
    this.traversePreorder(node.left);
    this.traversePreorder(node.right);
  }
  traverseInOrder(node) {}
  traversePostorder(node) {}
  
  // recursive implementation
  add(val){
    let current = new this.ListNode(val);
    if(!this.root){
      this.root = current;
      return;
    }
    this.addNode(current, this.root);
  }

  addNode(node, root){
    if(!node) return;
    if(node.val <= root.val){
      if(root.left) this.addNode(node, root.left);
      else{
        root.left = node;
      }
    }
    else{
      if(root.right) this.addNode(node, root.right);
      else{
        root.left = node;
      }
    }
  }

  // dynamic implementation
  /*
  add(val) {
    if(this.isEmpty()){ //if the tree is empty add current as root
      this.root = current;
    }
    else{ 
      findAndAdd(this.root);
      //if tree is not empty find the last node and add cuurent
      while(this.root){
        if(val <= this.root.val){
          if(this.root.left) 
            this.root = this.root.left; // keep traversing left
          else{ 
            this.root.left = current;   // add the node to the left
            break;
          }
        }
        else{
          if(this.root.right)
            this.root = this.root.right;    
          else { 
            this.root.right = current; //add the node the right
            break;
          }
        }
      }
    }
  }
  */

  isEmpty(){
    return this.root == null;
  }

  remove(val) {

  }

  search(val) {}
}
module.exports = BinarySearchTree;
