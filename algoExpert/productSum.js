
let input = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]; 

//                          22 
//                             

function productSum(array, layer=1) {
    // Write your code here.
    
    let total = 0; 
      
    for(let el of array) { // O(n) time / potentially O(depth) with depth being the greatest depth found in the array (i.e. the deepest 2d array)
        if(Array.isArray(el)) {
            total += productSum(el, layer + 1); // made the mistake of passing in layer++ before which incremented layer more than I wanted to 
        } else {
            total += el;		
        }
    }
  
    return layer * total; 
  }


console.log(productSum(input)); 

