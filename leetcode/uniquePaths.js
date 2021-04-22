// without some form of memoizaton this would timeout on leetcode 

var uniquePaths = function(m, n, memo={}) {
 
	if(m <= 1 || n <= 1) return 1; 

    let top, left; //
    
    if(memo[[m, n]] !== undefined) {
        return memo[[m, n]];
    } else {
        top = uniquePaths(m - 1, n, memo); // 2
        left = uniquePaths(m, n - 1, memo); // 3
        // !!!! 
        // if i dont declare let top/left on line 6, top/left WILL mutate during subsequent recursive calls
        // can't declare let top/left inside of this conditional because it will be scoped to it 
        // during the final recursive call, the value of top had changed during the recursive calls to left 
    }

    memo[[m, n]] = top + left; 

	return top + left; 	
};

    console.log(uniquePaths(3, 3)); 

// 1,1        1,2        1,3
// 2,1        2,2        2,3 => why is this 2 instead of 3? 
// 3,1        3,2        3,3


// iterative solution

//     let grid = new Array(m).fill(new Array(n).fill(1)); 

function iterativeUniquePaths() {
    
    let lastValue = 1; 
    
    for(let i = 0; i < grid.length; i++) {
        for(let y = 0; y < grid[i].length; y++) {
            
            if(i !== 0 && y !== 0) {
                
                let topValue = grid[i - 1][y]; 
                let leftValue = grid[i][y - 1]; 
                
                let sum = topValue + leftValue; 
                grid[i][y] = sum; 
                lastValue = sum; 
                
            }
        }
    }
    
    return lastValue; 
}