function numIslands(grid) {

	let islandCount = 0; 

	for(let x = 0; x < grid.length; x++) {
		for(let y = 0; y < grid[x].length; y++) {
			if(grid[x][y] === "1") {
				islandCount += connect(grid, x, y)
			}
		}
	}

	return islandCount; 
}

function connect(grid, x, y) {
	if(x < 0 || x >= grid.length || y < 0 || y >= grid[x].length || grid[x][y] === "0" || grid[x][y] === "W") return; 

	grid[x][y] = "W"; 
	connect(grid, x + 1, y); 
	connect(grid, x - 1, y); 
	connect(grid, x, y + 1); 
	connect(grid, x, y - 1); 

	return 1; 
}

grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

// console.log(numIslands(grid)); 
// console.log(grid); 

// very similar to the surrounded islands problem, except in this case I return 1 each time I make the call to the connect helper function, this indicates how many islands there are without counting any 1 value more than once. It also serves to mark all the 1's so they're not checked again. 



function numIslands2(grid) {

	let islandCount = 0; 

	for(let x = 0; x < grid.length; x++) {
		for(let y = 0; y < grid[x].length; y++) {
			if(grid[x][y] === "1") {
				// islandCount += connect(grid, x, y) instead of this, could you replicate the recursive call with a stack or queue ? 
                // found the 1, push it into a stack 
                // while the stack is not empty, find the neighboring 1's 
                // pop off the top element 
                // set it to 'W' 
                // 
                let stack = [[x, y]]; 

                while(stack.length > 0) {
                    let [x, y] = stack.pop(); 

                    // console.log(x, y)
                    grid[x][y] = "W"; 

                    if(x + 1 < grid.length && grid[x + 1][y] === "1") {
                        stack.push([x + 1, y]); 
                    }

                    if(x - 1 >= 0 && grid[x - 1][y] === "1") {
                        stack.push([x - 1, y]); 
                    }

                    if(y - 1 >= 0 && grid[x][y - 1] === "1") {
                        stack.push([x, y - 1]);
                    }

                    if(y + 1 < grid[x].length && grid[x][y + 1] === "1") {
                        stack.push([x, y + 1]); 
                    }

                }

                islandCount++; 
			}
		}
	}

	return islandCount; 
}

console.log(numIslands2(grid));

//[W, W, 0]
//[W, 1/1, 1]
//[W, 0, 0]