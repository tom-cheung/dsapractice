
let input = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]; 

//                          22 
//                             

function productSum(array, layer=1) {
    // Write your code here.
    
    let total = 0; 
      
    for(let el of array) {
        if(Array.isArray(el)) {
            total += productSum(el, layer + 1); 
        } else {
            total += el;		
        }
        console.log(total);
        console.log('layer', layer)
    }
  
    return layer * total; 
  }


console.log(productSum(input)); 

