function validateBst(node, min=-Infinity, max=Infinity) {
    
      if(node === null) return true; 
  
      if(node.value < min || node.value >= max) return false; 
      
      let left = validateBst(node.left, min, node.value); 
      let right = validateBst(node.right, node.value, max); 
  
      return left && right
  }