function cycleInGraph(edges) {
    const numberOfNodes = edges.length; // saving the number of edges to an array, each edge is represented by the index of the array 
    const visited = new Array(numberOfNodes).fill(false); // created an array of the same length as the number of nodes and giving each index a value of false 
    const currentlyInStack = new Array(numberOfNodes).fill(false); // again creating an array of the same length as the number of nodes with values of false, this is to track the descendents in order to see if any descendent points back to an ancestor 

    for(let node = 0; node < numberOfNodes; node++) {
        if(visited[node]) continue; // if the node has been visited already then skip it 

        const containsCycle = isNodeInCycle(node, edges, visited, currentlyInStack); // otherwise run a DFS to check if a cycle exists 
        if(containsCycle) return true; // isNodeInCycle returns a boolean, if true return true 
    }

    return false; // if you traverse the entire graph and find no cycles then return false 
}

function isNodeInCycle(node, edges, visited, currentlyInStack) {
    visited[node] = true; // first mark that the node has been visited 
    currentlyInStack[node] = true; // mark that the current node is in the stack 

    const neighbors = edges[node]; // retrieves the array of edges for each vertex

    for(const neighbor of neighbors) { // iterate through the neighbors 

        if(!visited[neighbor]) { // if the neighbor hasn't been visited, make a recursive call 
            const containsCycle = isNodeInCycle(neighbor, edges, visited, currentlyInStack); 
            if (containsCycle) return true // if the neighboring node hasn't been visited, visit it via this dFS call and if at any point it returns true, you've found a cycle 
        } else if(currentlyInStack[neighbor]) { // else if the neighbor has been visited and if it IS in the current STACK then you've found a cycle 
            return true; // this is essentially a base case where if a node has been visited and IS in the current stack then you've found a cycle 
        }

        // I suppose if a node has been visited then you dont need to visit it again, you would have caught a cycle in
        // you will only hit this recursive function if it's a node you havent visited
    }

    currentlyInStack[node] = false; // removed the node from the stack if a cycle isn;t found 
    return false; 
}