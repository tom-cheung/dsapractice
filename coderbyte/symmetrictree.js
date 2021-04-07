function SymmetricTree(strArr) { 

  // code goes here  
  let layers = [ [strArr[0]] ]; 

  let length = 2;  // 4 

  while(strArr[length - 1] !== undefined) {
    layers.push(strArr.slice(length - 1, length * 2 - 1))
    length *= 2; 
  }

//   return layers; 

  for(let layer of layers) {
    if(!checkSymmetry(layer)) {
      return false;
    }
  }

  return true; 

}

function checkSymmetry(arr) {
  let left = 0; 
  let right = arr.length - 1; 

  while(left < right) {
    if(arr[left] !== arr[right]) {
      return false
    }
    left++; 
    right--; 
  }

  return true; 
}

console.log(SymmetricTree(["1", "2", "2", "#", "3", "#", "3"]));
// console.log(checkSymmetry([2, 2]));

// binary tree => root node, followed by two nodes
// return a boolean value if tree is symmetric, equal on both sides 
// ["10", "2", "2", "#", "1", "1", "#"] => first element is always going to be the root 
// [ [10], ["2", "2"], [#, 1, 1, #]]
//    10
//  2    2 
// # 1  1  # 
//  return false  
// seperate the array into repsective layers, => use pointers to check either ends 
// 0 => 2 => 4 => .slice 
// some pattern where 2 - 1 would give me the start index of where to slice  

// checking for symmetrical layers 
// each array, have two pointers, one at either end 
// if any any point the two values at each pointer is not equal then I return false 
// if they are equal I increment the pointers towards the center 
// until they are equal => while the pointers are not equal  

// keep this function call here 

// 1. For input ["1", "2", "2", "3", "#", "#", "3"] the output was incorrect. The correct output is true

// 2. For input ["10", "2", "2", "#", "1", "1", "#"] the output was incorrect. The correct output is true

// 3. For input ["1", "4", "4", "3", "7", "7", "3", "9", "#", "#", "#", "#", "#", "#", "9"] the output was incorrect. The correct output is true

// 4. For input ["1", "4", "4", "3", "7", "7", "3", "9", "#", "#", "#", "#", "#", "#", "1"] the output was incorrect. The correct output is false

// 5. For input ["1", "2", "2", "3", "3", "3", "3"] the output was incorrect. The correct output is true

// 6. For input ["1", "2", "2", "#", "3", "#", "3"] the output was incorrect. The correct output is false

// 7. For input ["80", "#", "#"] the output was incorrect. The correct output is true