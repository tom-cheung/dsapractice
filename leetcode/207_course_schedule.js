var canFinish = function(numCourses, prerequisites) {
    let visited = Array.from({length: numCourses}).fill(false); 
    let inStack = Array.from({length: numCourses}).fill(false);
    
    // create the adjacency list 
    
    let adjList = Array.from({length: numCourses}, () => []); 
    for(let prereq of prerequisites) {
        let [neighbor, vertex] = prereq; 
        adjList[vertex].push(neighbor); 
    }
    
    for(let i = 0; i < numCourses; i++) {
        if(visited[i]) continue; 
        
        let containsCycle = isNodeInCycle(i, adjList, visited, inStack);
        
        if(containsCycle) return false; 
    }
    
    return true; 
};

function isNodeInCycle(node, adjList, visited, inStack) {
    visited[node] = true; // remember visited is an array
    inStack[node] = true; 
    
    let neighbors = adjList[node]; 
    for(let neighbor of neighbors) {
        
        if(!visited[neighbor]) {
            let containsCycle = isNodeInCycle(neighbor, adjList, visited, inStack); 
            
            if(containsCycle) return true; 
        } else if(inStack[neighbor]) {
            return true; 
        }
    }
    
    inStack[node] = false; 
    return false; 
}


