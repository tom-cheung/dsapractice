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
