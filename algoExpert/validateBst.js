function validateBst(node, min=-Infinity, max=Infinity) {

      if(node === null) return true; // reached the end of the tree  
  
      // for a bst to be valid each node must be within a min and max value
      // as you traverse the tree, in this case recursively, you can track what those min an max values are 
      if(node.value < min || node.value >= max) return false;
      
      let left = validateBst(node.left, min, node.value); 
      let right = validateBst(node.right, node.value, max); 
  
      return left && right
  }