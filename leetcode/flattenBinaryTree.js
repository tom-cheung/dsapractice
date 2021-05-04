var flatten = function(root) {
    let sortedNodes = DFS(root, []); 
    
    let currentNode = root; 
    
    for(let i = 1; i < sortedNodes.length; i++) {
        currentNode.right = sortedNodes[i];
        currentNode.left = null;
        currentNode = currentNode.right; 
    }
    
    return root; 
};

function DFS(node, sorted) {
    if(node === null) return sorted; 
    
    sorted.push(node); 
    
    DFS(node.left, sorted);
    DFS(node.right, sorted);
    
    return sorted; 
}