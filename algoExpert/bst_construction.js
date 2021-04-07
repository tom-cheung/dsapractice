// create a bst 
// it should have the following functions 
// inserting a value 
// contains => checks to see it the tree contains a value 
// removes a node of the given value 

// a valid BST node contains a value and a left child node and a right child node
// it's value must be greater than the left node and smaller or equal to the right node 

// inserting a value
// traversing the tree because you would have to find the correct place to insert 
// correct place being before or after the closest node 
    // find the closest node 
    // depending on whether that node is greater than/ equal to / less than the value then you would have to either insert 
    // the nodes dont point upwards only downwards
    // find the node that is smaller and closest to the value, that way you can insert 
    // create a method to find that smallest/equal to node 

    class BST {
        constructor(value) {
          this.value = value;
          this.left = null;
          this.right = null;
        }
      
        insert(value) {
          // Write your code here.
          // Do not edit the return statement of this method.



          return this;
        }
      
        contains(value) {
          // Write your code here.
        }
      
        remove(value) {
          // Write your code here.
          // Do not edit the return statement of this method.
          return this;
        }

        prevNode(value) {
            // find a node with the closest value without exceeding it 
        }
          
      }

      let root = new BST(1);
      let left = new BST(1);
      let right = new BST(2);
      root.left = left; 
      root.right = right;  
      
      let tree = [root, left, right]
      console.log(tree)
      console.log(tree[0].prevNode());