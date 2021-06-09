var findOrder = function(nCourse, courses) {
    
    let courseList = {}; 
    let sortedCourses = [];
    let taken = {}; 

    for(let i = 0; i  < nCourse; i++) courseList[i] = []; 
    for(let course of courses) courseList[course[1]].push(course[0]);

    for(let course of Object.keys(courseList)) { // 1 

        let visited = {}; 

        let foundCycle = cycle(course, courseList, sortedCourses, visited, taken);

        if(foundCycle) return []; 
        if(!foundCycle && taken[course] !== true) {
            sortedCourses.push(parseInt(course))
            taken[course] = true; 
        };
        
    }

    return sortedCourses.reverse(); 
};

function cycle(course, adjList, orderedCourses, visited, taken) {

    // 9/8/21 => bug here is with the case of {0 => [], 1 => [0, 2], 2 => [0], 3 => [2] }
    // specifically 1 => [0, 2]
    // the way I am recording visited courses, I am getting a false positive because 0 is marked as visited when iterating through the adjacency list for 1 
    // but during the second iteration, the 2 also contains a 0 in it's adjacency list, which has already been marked as visited 
    // potential solution is to not pass in the same visited object, but to make a copy 

    if(visited[course] === undefined) { // checks for a cycle 
        visited[course] = 'visited'
    } else if(visited[course] === 'visited') {
        return true; 
    } 
    
    if(adjList[course].length < 1) {
        if(taken[course] !== true) {
            orderedCourses.push(parseInt(course));
            taken[course] = true;
        }
        return false 
    }


    for(let adj of adjList[course]) {
        let cycleFound = cycle(adj, adjList, orderedCourses, Object.assign({}, visited), taken) // implemented potential fix here with object.assign 
        if(cycleFound === true) {
            return true; 
        } else {
            if(taken[adj] !== true) {
                orderedCourses.push(adj); 
                taken[adj] = true; 
            }
        }
    }

    return false; 

}



// console.log(findOrder(3, [[0,1],[0,2],[1,2]]))
// console.log(findOrder(4, [[2, 3], [0, 2], [0, 1], [2, 1]]))
// console.log(findOrder(2, []))



/*



  
    each DFS, track courses visited, individually 
    if you visit a course already visited then it's a cycle 
    this needs to be local 

    if you find a valid end course, you push that course in and record it 
    this is so that you don't duplicate adding courses in 
    this needs to be at the top level 
*/ 

/*

    6/8/21 Cycle in Graph 

    weights, measure of distance between vertices 

    undirected, can only travel in one direction 


    self loop, one vertices that goes to itself, it's a cycle 

    different type of edges 

        tree edge, an edge that allows discovery of undiscovered vertex 

        back edge, an edge that connects a descendent back to an ancestor 

        cross edge, an edge that does not connect an ancestor to a descendant, but two different vertices that are in two different subtrees

        forward edge, from an ancestor that goes to a descendent already visited 

*/

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
