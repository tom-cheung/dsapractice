let board = [["O","X","X","X"],
             ["O","O","X","X"],
             ["X","X","O","X"],
             ["X","O","X","X"]]; 

let board1 = [["X","X","X","X"],
             ["X","O","O","X"],
             ["X","X","O","X"],
             ["X","O","X","X"]]; 

let board2 = [["O","O","O","O"],
             ["O","O","O","O"],
             ["O","O","O","O"],
             ["O","O","O","O"]]; 

let board3 = [["O","X","O","O","X","X"],
              ["O","X","X","X","O","X"],
              ["X","O","O","X","O","O"],
              ["X","O","X","X","X","X"],
              ["O","O","X","O","X","X"],
              ["X","X","O","O","O","O"]]

let board4 = [["O","X","O","O","X","X"],
              ["O","X","X","X","O","X"],
              ["X","O","O","X","O","O"],
              ["X","O","X","X","X","X"],
              ["O","O","X","O","X","X"],
              ["X","X","O","O","O","O"]]

// let checked = {}

// for(let i = 0; i < board.length; i++) {
//     // let checked = {}

//     for(let y = 0; y < board[i].length; y++) {
//         let element = board[i][y]; 
//         // checked[[i, y]] = true; 

//         if(element === "O" && checked[[i, y]] !== true) {

//             let stack = [[i, y]]; 
//             let visited = [[i, y]]; 

//             while(stack.length > 0) {
//                 let removed = stack.pop(); 
//                 checked[removed] = true; 

//                 // indices of the neighbors 
//                 if(board[removed[0]][removed[1] + 1] === undefined) {
//                     visited = []; 
//                     break; 
//                 } else if(board[removed[0]][removed[1] + 1] === "O") {
//                     stack.push([removed[0], removed[1] + 1])
//                     visited.push([removed[0], removed[1] + 1])
//                 }

//                 if(board[removed[0] + 1] === undefined) {
//                     visited = []; 
//                     break; 
//                 } else if(board[removed[0] + 1][removed[1] + 1] === "O") {
//                     stack.push([removed[0] + 1, removed[1] + 1])
//                     if(!visited.includes([removed[0] + 1, removed[1] + 1])) {
//                         visited.push([removed[0] + 1, removed[1] + 1])
//                     } 
//                 }
//             }
            
//             if(visited.length > 0) {
//                 for(let index of visited) {
//                     board[index[0]][index[1]] = "X"
//                 }
//             }
//         }
//     }
// }

let board5 = [["O","X","X","X"],
             ["O","O","X","X"],
             ["X","X","O","X"],
             ["X","O","X","X"]]; 

function flipIt(board) {
    let checked = {}; // used to mark elements that have already been checked via the neighbor checker. 

    // outer loop iterates through the outer array 
    for(let rowIdx = 0; rowIdx < board.length; rowIdx++) {

        // inner loop iterates through the inner arrays 
        for(let colIdx = 0; colIdx < board[rowIdx].length; colIdx++) { 

            // if you find a "O" element and it hasn't been checked already 
            if(board[rowIdx][colIdx] === "O" && checked[[rowIdx, colIdx]] === undefined) {

                // once you've found a "O" you want to find all connecting ones, and to do that you could use a stack where you push in the "O" node followed by all it's neighboring "O" nodes until there are no more 
                // with a stack, you push in the first "O" node, then you pop it off and push in any "O" nodes next to it. You can continue this witin a while loop with the condition being stop if the stack is empty/there are no more nodes you can push in 
                // a stack is better than a queue, because .shift will cause the subsequent elements to be reassigned to a different index 
                let stack = [[rowIdx, colIdx]]
                let visited = [[rowIdx, colIdx]]; 
                let invalid = false; 
                // console.log(stack);

                while(stack.length > 0) {

                    let prevElement = stack.pop(); 
                    checked[prevElement] = true; 
                    
                    // if the neighboring elements up / down / left / right are undefined it means it's on a border and should not be counted 
                    if(board[prevElement[0]][prevElement[1] + 1] === undefined || board[prevElement[0] + 1] === undefined || board[prevElement[0] - 1] === undefined || board[prevElement[0]][prevElement[1] - 1] === undefined)  {
                        // maybe dont break it, record it
                        invalid = true; 
                    }

                    // right neighbor 
                    // if not undefined and equal to O 
                    if( board[prevElement[0]][prevElement[1] + 1] !== undefined && board[prevElement[0]][prevElement[1] + 1] === "O") {
                        // console.log('right')
                        if(checked[ [prevElement[0], prevElement[1] + 1] ] === undefined) {
                            // console.log('right')
                            stack.push([prevElement[0], prevElement[1] + 1])
                            visited.push([prevElement[0], prevElement[1] + 1])
                        }


                        // if(!visited.includes([prevElement[0], prevElement[1] + 1])) {
                        //     visited.push([prevElement[0], prevElement[1] + 1])
                        // }
                    }

                    // bottom neighbor 
                    // if not undefined and equal to O
                    if(board[prevElement[0] + 1] !== undefined && board[prevElement[0] + 1][prevElement[1]] === "O") {
                        // console.log('bottom')
                        if(checked[ [prevElement[0] + 1, prevElement[1]] ] === undefined) {
                            // console.log('bottom')
                            stack.push([prevElement[0] + 1, prevElement[1]])
                            visited.push([prevElement[0] + 1, prevElement[1]])
                        }

                        // if(!visited.includes([prevElement[0] + 1, prevElement[1]])) {
                        //     visited.push([prevElement[0] + 1, prevElement[1]])
                        // }
                    }

                    // top neighbor 
                    // if not undefined and equal to O 
                    if(board[prevElement[0] - 1] !== undefined && board[prevElement[0] - 1][prevElement[1]] === "O") {
                        // console.log('top')
                        if(checked[ [prevElement[0] - 1, prevElement[1]] ] === undefined) {
                            // console.log('top')
                            stack.push([prevElement[0] - 1, prevElement[1]])
                            visited.push([prevElement[0] - 1, prevElement[1]])
                        }

                        // if(!visited.includes([prevElement[0] - 1, prevElement[1]])) {
                        //     visited.push([prevElement[0] - 1, prevElement[1]])
                        // }
                    }

                    if(board[prevElement[0]][prevElement[1] - 1] !== undefined && board[prevElement[0]][prevElement[1] - 1] === "O") {
                        // console.log('left')
                        if(checked[ [prevElement[0], prevElement[1] - 1] ] === undefined) {
                            // console.log('left')
                            stack.push([prevElement[0], prevElement[1] - 1])
                            visited.push([prevElement[0], prevElement[1] - 1])
                        }

                        // if(!visited.includes([prevElement[0], prevElement[1] - 1])) {
                        //     visited.push([prevElement[0], prevElement[1] - 1])
                        // }
                    }
                }

                // for(let indices of visited) {
                //     checked[indices] = true; 
                // }

                if(!invalid) {
                    for(let indices of visited) {
                        board[indices[0]][indices[1]] = "X"; 
                    }
                } 

                // console.log(board)
                // console.log(checked);
                // console.log(checked);

            }

        }
    }
}

// console.log(board);
console.log(flipIt(board3));
console.log(board3);

function flipIt(board) {
    let checked = {}; 

    for(let rowIdx = 0; rowIdx < board.length; rowIdx++) {

        for(let colIdx = 0; colIdx < board[rowIdx].length; colIdx++) { 

   
            if(board[rowIdx][colIdx] === "O" && checked[[rowIdx, colIdx]] === undefined) {

 
                let stack = [[rowIdx, colIdx]]
                let visited = [[rowIdx, colIdx]]; 
                let invalid = false; 

                while(stack.length > 0) {

                    let prevElement = stack.pop(); 
                    checked[prevElement] = true; 
   
                    if(board[prevElement[0]][prevElement[1] + 1] === undefined || board[prevElement[0] + 1] === undefined || board[prevElement[0] - 1] === undefined || board[prevElement[0]][prevElement[1] - 1] === undefined)  {
                        invalid = true; 
                    }

                    if( board[prevElement[0]][prevElement[1] + 1] !== undefined && board[prevElement[0]][prevElement[1] + 1] === "O") {

                        if(checked[ [prevElement[0], prevElement[1] + 1] ] === undefined) {
 
                            stack.push([prevElement[0], prevElement[1] + 1])
                            visited.push([prevElement[0], prevElement[1] + 1])
                        }
                    }

    
                    if(board[prevElement[0] + 1] !== undefined && board[prevElement[0] + 1][prevElement[1]] === "O") {

                        if(checked[ [prevElement[0] + 1, prevElement[1]] ] === undefined) {
  
                            stack.push([prevElement[0] + 1, prevElement[1]])
                            visited.push([prevElement[0] + 1, prevElement[1]])
                        }

                    }

    
                    if(board[prevElement[0] - 1] !== undefined && board[prevElement[0] - 1][prevElement[1]] === "O") {

                        if(checked[ [prevElement[0] - 1, prevElement[1]] ] === undefined) {
  
                            stack.push([prevElement[0] - 1, prevElement[1]])
                            visited.push([prevElement[0] - 1, prevElement[1]])
                        }

                    }

                    if(board[prevElement[0]][prevElement[1] - 1] !== undefined && board[prevElement[0]][prevElement[1] - 1] === "O") {
         
                        if(checked[ [prevElement[0], prevElement[1] - 1] ] === undefined) {
                            stack.push([prevElement[0], prevElement[1] - 1])
                            visited.push([prevElement[0], prevElement[1] - 1])
                        }


                    }
                }

                if(!invalid) {
                    for(let indices of visited) {
                        board[indices[0]][indices[1]] = "X"; 
                    }
                } 

            }

        }
    }
}
