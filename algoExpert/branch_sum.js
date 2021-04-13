// you're using the recursive call not to return something but to push things into a pointer that you keep passing down each call 

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

function branchSums(root) {
    // Write your code here.
      let branchSums = []; 
      sumHelper(root, 0, branchSums)
      return branchSums; 
  }
  
  
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

  let testNode = new BinaryTree(5);
  testNode.left = new BinaryTree(3); 
  testNode.right = new BinaryTree(10);
  console.log(testNode); 