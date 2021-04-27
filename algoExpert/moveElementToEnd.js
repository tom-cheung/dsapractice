
// using two pointers you can iterate through the entire array starting from either ends and swap numbers that need to be swapped
// the below function wont keep the order of the non target numbers 

function moveElementToEnd(array, toMove) {

    let left = 0; 
    let right = array.length - 1; 

    while(right > left) {
        let leftNum = array[left];
        let rightNum = array[right]; 

        if(leftNum === toMove && rightNum !== toMove) {
            array[left] = rightNum; 
            array[right] = toMove; 
            left++; 
            right--; 
        }

        if(leftNum !== toMove) left++; 
        if(rightNUm === toMove) right--; 
    }
}

// [4, 1, 3, 2, 2, 2, 2, 2]

// 2
// trigger = sorted 
// if current = target && next !== target 
// [1, 2, 2, 2, 2, 3, 4, 2]

// bubble sort method 

// [4, 1, 2, 2, 2, 3, 2, 2]

// ^		   ^  

// while right > left 

// if left !== 2 move it right 
// if right === 2 move it left 

// if(left === 2 && right !== 2) swap 



// identify the target num to be moved
//



