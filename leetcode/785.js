const isBipartite = graph => {
    const colors = new Map(); // a map 
  
    for (let u = 0; u < graph.length; u++) { 
      if (!dfs(graph, colors, u, 0)) { 
        return false;
      }
    }
    return true;
  };
  
  const dfs = (graph, colors, u, color) => { 
    if (!colors.has(u)) { 

      colors.set(u, color);
      for (const v of graph[u]) {
        if (!dfs(graph, colors, v, 1 - color) || colors.get(v) === color) {  // v = 1, color = 1 // v = 0, color = 0 
          return false;
        }
      }
    }
  
    return true;
  };


  // strategy, traverse each node in the graph
  // starting with the first node, assign it to a group
  // because the goal is to see if the graph can be divided into TWO groups that only connect to each other and and not to nodes within the same group
  // we can use the strategy of assigning a node and it's connected nodes to two seperate groups 
  // if we ever encounter a connecting node that is part of the same group then 
const isBipartite2 = (graph) => {

  const groups = {}; 
  let queue = []; 

  for(let i = 0; i < graph.length; i++) { // check each node 
    if(!groups[i]) {
      queue.push(i); // 0
    } else {
      continue;
    } 

    while(queue.length) {
      let node = queue.shift(); // 3
      if(!groups[node]) groups[node] = 'A';
      let nextGroup = groups[node] === 'A' ? 'B' : 'A'; // A // B 

      for(let edge of graph[node]) { // [0,3] // [1, 2]
        if(!groups[edge]) {
          groups[edge] = nextGroup;
          queue.push(edge);
        } 
        if(groups[edge] === groups[node]) return false 
      }

      // goal is to check the first node, assign it to a group IF it HASN'T been assigned one 
      // go through its edges, assign those connected nodes to another group 
      // the situation is how to track when I have multiple nodes in the stack, which group to assign them to? specifically when I started pushing in nodes of nodes, what distinguishes what group subsequent nodes should be assigned to
      // i suppose I should assign it to whatever it's 'parent' node is NOT

    }
  }

  return true; 
}

console.log(isBipartite2([[1,2,3],[0,2],[0,1,3],[0,2]]));
console.log(isBipartite2([
  [1], // 0
  [0,3], // 1
  [3], // 2
  [1,2] // 3
]));

