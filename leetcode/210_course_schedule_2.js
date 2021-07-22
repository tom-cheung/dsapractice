var findOrder = function(numCourses, prerequisites) {
    let visited = Array.from(numCourses).fill(false); 
    let inStack = Array.from({length: numCourses}, () => false);
    let included = Array.from(numCourses).fill(false); // used to track what;s 
    
    let sortedCourses = []; 
    
    let adjList = Array.from({length: numCourses}, () => []); 
    

    for(let prereq of prerequisites) {
        let [neighbor, vertex] = prereq; 
        adjList[vertex].push(neighbor); 
    }
    
    for(let vertex = 0; vertex < numCourses; vertex++) {
        if(visited[vertex]) continue; 
        
        let cycleFound = findCycle(vertex, adjList, visited, inStack, sortedCourses, included); 
        if(cycleFound) return []; 
    }
    
    return sortedCourses.reverse(); 
        
};

function findCycle(vertex, adjList, visited, inStack, sortedCourses, included) {
    
    visited[vertex] = true; 
    inStack[vertex] = true; 
    
    let neighbors = adjList[vertex]; // [0]
    
    // to catch the last course that leads to no subsequent courses 
    if(neighbors.length < 1) {
        if(!included[vertex]) sortedCourses.push(vertex)
        inStack[vertex] = false; 
        return false; 
    }
    
    for(let neighbor of neighbors) {
        if(!visited[neighbor]) {
            let cycleFound = findCycle(neighbor, adjList, visited, inStack, sortedCourses, included)
            if(cycleFound) return true; 
        } else if(inStack[neighbor]) {
            return true; 
        }

    }
    
    if(!included[vertex]) sortedCourses.push(vertex);
        
    inStack[vertex] = false; 
    
    return false; 
    
}