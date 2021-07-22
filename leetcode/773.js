// given a 2D array, matrix 
// have to return the LEAST NUMBER OF MOVES so that the board loosk like 
// [1, 2, 3]
// [4, 5, 0]
// I can only swap zero with a el to it's top, bottom, left, right 
// [1, 2, 3, 4, 5, 0]

// [1, 2, 3]
// [4, 0, 5]

// identify the position of 0 => 1,1
// swap with el's to the top, bottom, left, right 
// [1, 0, 3]
// [4, 2, 5]

// [1, 2, 3]
// [4, 5, 0]

// [1, 2, 3]
// [0, 4, 5]

// once swapped, I can check if the new matrix is equal to the target matrix 

// one way to do that would be to convert the target to a string, and the new matrix to a string 

// join() and concat 

// [1, 2, 3]
// [5, 4, 0]

// [1, 2, 0]
// [5, 4, 3]

    // [1, 0, 2]
    // [5, 4, 3]

// [1, 2, 3]
// [5, 0, 4]

    // [1, 0, 3]
    // [5, 2, 4] 

    // [1, 2, 3]
    // [0, 5, 4]

    // [1, 2, 3]
    // [5, 4, 0]  => don't want to do this, because i've already visited this 'grid'

// no match but I could swap again 
// one way is to track the state of the board after each swap 
// use a {}, key being the state of the board, value being true 
// if at some point the state of the board is revisted then return false 
// otherwise if you hit the target board state return a count of the number of moves it took 
// would require tracking the number of moves it took 

// first find the pos of 0 
// from that position 
// check if the current board is equal to the target 
// if not swap the 0 with el's to the left, right, top, bottom 
// need a check to see if 

// do have the find the pos of 0
// dont have to do a DFS, but a BFS would be fine, since the first time you find the target is the depth to return 
// use a queue
// can still use the directions method for traversing a grid, just have to account for where pos 0 is, otherwise you can just account for stepping off the board or being seen 

// [4, 1, 2]
// [5, 0, 3]

function fun(board) {

    // set target
    let target = '1,2,3,4,5,0'; 

    // set dirs 
    let dirs = [[-1,0], [0,1], [1,0], [0,-1]]; 

    let queue = [board]; 

    // record depth 
    let depth = 0; 

    // record visited boards 
    let visited = {}; 

    // a breath first search approach 
    while(queue.length > 0) {
        let boards = queue.length; // used to track the versions of the board at a specific depth, want to review all of them before moving onto boards at the nest depth 
        while(boards > 0) {
            let copy = queue.shift() // shift the board out 
            let stringify = copy.join(',') // turn the board into a string so it's easier to compare with the target
            visited[stringify] = true; // set the board to visited to avoid revisiting the same board 
            if(stringify === target) return depth; // return the depth if the board is what you're looking or 
            let [x, y] = copy[0].indexOf(0) !== -1 ? [0, copy[0].indexOf(0)] : [1, copy[1].indexOf(0)]; // otherwise get the x,y position of 0, make sure this is of the current board you're reviewing 

            for(let dir of dirs) { // iterate through dirs 

                let copyBoard = [[...copy[0]], [...copy[1]]];   // make a copy of the board before the swap otherwise you'll swap the same board over and over again 
                let swapX = x + dir[0]; // get the target coord of the el to swap 
                let swapY = y + dir[1];

                if(swapX >= 0 && swapX < copyBoard.length && swapY >= 0 && swapY < copyBoard[swapX].length) { // check if the target is actually a valid pos on the board 

                    // swapping 
                    let zero = copyBoard[x][y];
                    copyBoard[x][y] = copyBoard[swapX][swapY];
                    copyBoard[swapX][swapY] = zero; 

                    if(!visited[copyBoard.join(',')]) { // to avoid revisiting the same boards, only push in non visited boards 
                        queue.push(copyBoard); 
                    }
                }
            }
            boards--; // to check only the boards at that layer (that swap)
        }
        depth++; // increment the depth once you check all boards at that depth 
    }
    return -1; 
}

console.log(fun([[4, 1, 2], [5, 0, 3]]));