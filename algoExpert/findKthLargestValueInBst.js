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
    // concat is an O(n) operation, which can slow down this solution 
    if(left) currVal = left.concat(currVal);
    if(right) currVal = currVal.concat(right); 
    return currVal; 
}

// more optimal solution 
function findKthLargestValueInBst(tree, k) {
    // Write your code here.

    let sortedVal = [tree.value];
    
    sortValue(tree, sortedVal)
    return sortedVal[sortedVal.length - k];
  }


function sortValue(tree, sortedVal) {
    if(tree === null) return; 

    // keep recursively traversing the tree until it reaches the left most (smallest value)
    sortValue(tree.left, sortedVal); 
    // push that value  
    sortedVal.push(tree.value);
    // recusively traverse the right side of the tree to capture the larger values.  
    sortValue(tree.right, sortedVal); 
}