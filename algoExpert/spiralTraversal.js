let arr = [
            [4, 3, 8, 11],
            [9, 6, 1, 42],
            [7, 5, 3, 86],
            [27, 75, 41, 99]
          ]

// the goal is to write a function that takes in a 2D array 
// return a 1D array of all elements in spiral order 
// the input array is not necessarily a square 

// [b, c, a, j] 
// [e, f, k, q] 
// [j, q, m, p]
// [z, n, y, f]

// [b, c, a, j, q, p, f, y, n, z, j, e, f, k, m, q]

// traverse right to the end of the row => arr[0].length // 3 
// traverse down to the last row => arr.length           // 3 
// traverse right to the beginning of the row => 0       // 0 
// traverse up until => arr.length - 1                   // 1

// traverse right until => arr[0].length - 1             // 2
// traverse down until => arr.length - 2                 // 2
// traverse right until => arr[0].length - 2             // 2 

// target starts at the end and resets to 0, then 

//[b, c]
//[e, f]

// [b, c, f, e]

// [b, c]

// => [b, c]

// multiple for loops, you're following the same pattern 
// but there are really four 'targets' you need to track
// first loop goes till the end of the row 
// second goes to the end of the array 
// third goes to the beginning 
// fourth goes to second to last 

// repeat but all targets are incremented or decremented 

// targetOne = array[0].length 
// targetTwo = array.length 
// targetThree = 0; 
// targetFour = 1;

// targetOne--; 
// targetTwo--; 
// targetThree++; 
// targetFour++; 

// mark each one you've traversed 

function spiralTraversal(arr) {

    let targetOne = arr[0].length; 
    let targetTwo = arr.length; 
    let targetThree = 0; 
    let targetFour = 1; 
    let row = 0; 
    let col = 0; 

    let flattened = []; 

    while(flattened.length < (arr[0].length * arr.length)) {
        for(let i = col; i < targetOne; i++) {
            let element = arr[row][i];
            if(element !== "X") {
                flattened.push(arr[row][i]);
                arr[row][i] = "X";
            } 
            col = i;  
        } 

        // row++; 
        // console.log(flattened);

        for(let i = row; i < targetTwo; i++) {
            let element = arr[i][col]; 
            if(element !== "X") {
                flattened.push(arr[i][col]);
                arr[i][col] = "X";
            }
            row = i; 
        }

        // col--; 
        // console.log(flattened);

        for(let i = col; i >= targetThree; i--) {
            let element = arr[row][i]; 
            if(element !== "X") {
                flattened.push(arr[row][i]); 
                arr[row][i] = "X"; 
            }
            col = i; 
        }

        // row--; 
        // console.log(flattened);

        for(let i = row; i >= targetFour; i--) {
            let element = arr[i][col]; 
            if(element !== "X") {
                flattened.push(arr[i][col]); 
                arr[i][col] = "X"
            }
            row = i; 
        }

        
        // console.log(flattened);

        targetOne--; 
        targetTwo--; 
        targetThree++; 
        targetFour++; 
        
    }

    return flattened; 
}

console.log(spiralTraversal(arr));

