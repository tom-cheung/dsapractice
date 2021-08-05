// goal is to invert a binary tree
// binary tree is comprised of node(s) 
// each node has a value, a left child node and a right child node 
// each child can either be another node or null 
// at each node, swap the left and right child nodes 
// if the left and right child nodes are not null, mark them to be traversed and swapped 

function invertBinaryTree(tree) { 
    let queue = [tree]; 
    while(queue) {
        let node = queue.shift(); 
        const left = node.left; 
        tree.left = node.right; 
        node.right = left; 
        if(node.left !== null) queue.push(node.left);
        if(node.right !== null) queue.push(node.right);
    }
    return tree; 
}

// O(n) time complexity, since the entire tree is being traversed 
// O(n) space since I am storing each node, though also shifting them off 


// recursively 
function invertBinaryTree(tree) {
    if(tree === null) return; 
    const left = tree.left; 
    tree.left = tree.right; 
    tree.right = left;
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
    return tree; 
}
