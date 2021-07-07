function findKthLargestValueInBst(tree, k) {
    // Write your code here.
      let sortedVal = sortValue(tree)
    return sortedVal[sortedVal.length - k];
  }
  
function sortValue(tree) {
    if(tree === null) return; 
    
    let left = sortValue(tree.left);
    let right = sortValue(tree.right);
    
    let currVal = [tree.value];
    if(left) currVal = left.concat(currVal);
    if(right) currVal = currVal.concat(right); 
    return currVal; 
}