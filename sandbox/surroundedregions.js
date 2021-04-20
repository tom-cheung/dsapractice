function solve(board) {
    
    for(let x = 0; x < board.length; x++) {
        for(let y = 0; y < board[x].length; y++) {
            if(board[x][y] === "O" && (x === 0 || x === board.length - 1 || y === 0 || y === board[x].length - 1 )) {
                neighbors(board, x, y); 
            }
        }
    }

    for(let x = 0; x < board.length; x++) {
        for(let y = 0; y < board[x].length; y++) {
            if(board[x][y] === "W") {
                board[x][y] = "O"
            } else {
                board[x][y] = "X"; 
            }
        }
    }
    
    return board; 
}


// this recursive call takes in grid and an x and y value 
// the x and y value represents a specific value
// the logic is if you find a 'O' on the boarder you want to flip it to a 'W' essentially marking it as checked 
// 

function neighbors(grid, x, y) {
    if(x < 0 || x >= grid.length || y < 0 || y >= grid[x].length || grid[x][y] === "X" || grid[x][y] === "W") return; 
    
    grid[x][y] = "W"; 
    neighbors(grid, x - 1, y);
    neighbors(grid, x + 1, y); 
    neighbors(grid, x, y - 1); 
    neighbors(grid, x, y + 1); 
} 

console.log(solve([ ["X","O","X"],
                    ["O","X","O"],
                    ["X","O","X"]
                  ])); 