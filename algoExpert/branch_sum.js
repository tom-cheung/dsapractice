// you're using the recursive call not to return something but to push things into a pointer that you keep passing down each call 

// this is the class for implementing a binary tree 
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

// the main function 
// by creating an array variable you can store the sums of each branch 
// you pass in a reference/pointer of the array to the sumHelper method, which is recursive
    function branchSums(root) {
    // Write your code here.
      let branchSums = []; 
      sumHelper(root, 0, branchSums)
      return branchSums; 
    }
  
    // this recursive call has the base case of returning nothing when it hits a null node, the end 
    // steadily accumulates the values of each node going down each branch and stores it in the newSum variable
    // you only add the sum of the branches to the branchSums array when you reach a LEAF node, one that has neither left or right nodes
    // the newSum variable gets passed down to each recursive call, along with the subsequent left/right node and the pointer
    // to the branchSums array  
    function sumHelper(node, sum, branchSums) {
      if(node === null) return;
      
      let newSum = sum + node.value; 
      
      // you only push the sum into the 
      if(!node.left && !node.right) {
          branchSums.push(newSum);
          return
      }
      
      sumHelper(node.left, newSum, branchSums);
      sumHelper(node.right, newSum, branchSums);
    }


    // no helper function solution 

    // This is the class of the input root.
    // Do not edit it.
    // class BinaryTree {
    //     constructor(value) {
    //       this.value = value;
    //       this.left = null;
    //       this.right = null;
    //     }
    //   }
  
    function branchSums(root, sum = 0, allSums = []) {
      // Write your code here.

        // if the node is null then you just return, you dont want to go any further 
        if(root === null) return; 

        // calculates the new sum // 0(1)
        let newSum = sum + root.value; 

        // once you reach a leaf, push the newSum (total sum of the branch) into the array 
        if(root.left === null && root.right === null) {
            allSums.push(newSum); 
        }

        // continue to traverse the branch 
        branchSums(root.left, newSum, allSums); 
        branchSums(root.right, newSum, allSums);

        // return the allSums array, wont run until you reach the leaf node and the base case is reached 
        // because the recursive call above will continue to run, blocking the stack until it finishes running 
        // good reminder of the single thread nature of this environment and how you can leverage this stack to solve a problem 
        // recursively 
        return allSums; 
    }

    // sum every branch => requires traversing through it 
    // because I have to sum each branch I have to reach the leaf nodes 
    // depth first search, recusively would be the best bet
  

    // testing count sort and using it to sort the array and setting the value to be an object
    // where the key is the frequency of the number and the value is an index showing where the element appears 
    // now that I think about it I dont even need the key/value pair, just an array with the indices is fine 



