// 1. For input ["(2,3)", "(1,2)", "(4,9)", "(9,3)", "(12,9)", "(6,4)"] the output was incorrect. The correct output is true

// 2. For input ["(5,6)", "(6,3)", "(2,3)", "(12,5)"] the output was incorrect. The correct output is true

// parent => [3, 2, 9, 3, 9, 4] => {3:2, 2:1, 9:2, 4:1} => [3, 2, 9, 4]
// child => [2, 1, 4, 9, 6] => {2:1, 1:1, 4:1, 9:1, 6:1}
// root => 3 
// true 
// 
// 

function TreeConstructor(strArr) { 

    // code goes here  
    let childNodes = {}; // {1:1, 3:1, 2:1, 5:1} // constant time 
    let parentNodes = {}; // {2: 2, 12:1, } // constant time 
    let rootNode = []; // 
  
    for(let pair of strArr) { // 0(n) * 
      let arrPair = pair.slice(1, pair.length-1).split(",") // .replace(/[()]/g, "") // O(m)
      let child = arrPair[0]; // 5
      let parent = arrPair[1]; // 2
  
      if(childNodes[child] === undefined) { 
        childNodes[child] = 1; 
      } else {
        childNodes[child]++; 
      }
  
      if(parentNodes[parent] === undefined) {
        parentNodes[parent] = 1; 
      } else if(parentNodes[parent] === 2) {
        return false; 
      } else {
        parentNodes[parent]++; 
      }
    }
  
    for(let parent of Object.keys(parentNodes)) {
      if(childNodes[parent] === undefined) {
        rootNode.push(parent)
      }
    } 
  
    return rootNode.length === 1; 
  
  }

  console.log(TreeConstructor(["(2,3)", "(1,2)", "(4,9)", "(9,3)", "(12,9)", "(6,4)"]))
  
  // ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]

//      12
// 1 -> 2 <- 3
//      5
  
  // will the numbers be single digits? 
  // if so the indices will always be the same for each element pair 
  // ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
  //      12
  //      ^ 
  // 1 >  2  < 3
  //      ^
  //      5
  
  // repeating numbers => 2 two's?
  
  // ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
  
  // root => 
  // parent node => [2, 2, 12, 2] => 2 appears more twice, meaning it has more than 2 children => false 
  // child node => [1, 3, 2, 5] 
  
  // a parent node has no more than 2 children, so a parent node can't appear more than twice
  // a root node wont appear as a child node
  // if I have a list of parent nodes and child nodes 
  //  root node => element that does not appear as a child => more than 1 root node return false 
  // parent node should never appear more than twice 
  // a child node should not appear more than once? 
  // 