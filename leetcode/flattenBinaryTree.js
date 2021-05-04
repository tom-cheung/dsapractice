
var flatten = function(root) {
    let sortedNodes = DFS(root, []); 
    
    let currentNode = root; 
    
    // iterate through the sorted array of nodes 
    // set the current node to point to a new node
    // reset the current node to the next node 
    for(let i = 1; i < sortedNodes.length; i++) {
        currentNode.right = sortedNodes[i];
        currentNode.left = null;
        currentNode = currentNode.right; 
    }
    
    return root; 
};

// DFS to traverse the tree from left to right, obtaining the values in order 
function DFS(node, sorted) {
    if(node === null) return sorted; 
    
    sorted.push(node); 
    
    DFS(node.left, sorted);
    DFS(node.right, sorted);
    
    return sorted; 
}

// time complexity O(2n) => O(n) space and time 