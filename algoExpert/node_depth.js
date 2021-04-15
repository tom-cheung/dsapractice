function calcDepth(node, depth = 0) {
    // this base case is if you hit a null node you return 0, it avoids double counting the leaf layer since 0 + 0 is 0, the issue is what then do you return? 
    if(node === null) return 0; 

    // by plugging in depth you're returning the current depth without having it depend on the subsequent recursive calls. 
    return depth + calcDepth(node.left, depth + 1) + calcDepth(node.right, depth + 1); 
}