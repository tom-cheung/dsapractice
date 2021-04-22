// strategy is to find the max height of the buildings when viewed from the top or bottom and left or right 
// once you know those you know that you can only increase each building up to the second tallest existing building 

var maxIncreaseKeepingSkyline = function(grid) {
    let topBottom = []; 
    let leftRight = []; 
    

    // iterate across then down each column to find the max height of each column 
    for(let i = 0; i < grid[0].length; i++) {
        
        let maxHeight = 0; 
        
        for(let y = 0; y < grid.length; y++) {
             
            let height = grid[y][i];
            if(height > maxHeight) {
                maxHeight = height; 
            }
        }
        topBottom.push(maxHeight)
    }
    
    // iterate down and across each row to find the max height of each row 
    for(let i = 0; i < grid.length; i++) {
        
        let maxHeight = 0; 
        
        for(let y = 0; y < grid[i].length; y++) {
            
            let height = grid[i][y]; 
            
            if(height > maxHeight) {
                maxHeight = height; 
            }
        }
        leftRight.push(maxHeight); 
    }
    
    // variable used to store the total changes made to each building 
    let totalChanges = 0; 
    

    // iterate across the the entire grid, and find the difference between the max height that a building at that intersection could be (which is the second tallest) and the height of the current building 
    // add the difference to totalChanges 
 

    for(let i = 0; i < grid.length; i++) {
        for(let y = 0; y < grid[i].length; y++) {
            
            let currentHeight = grid[i][y]; 

            //ternary statement to find the second tallest height at a particular intersection. 
            let maxHeight = topBottom[y] >= leftRight[i] ? leftRight[i] : topBottom[y]; 
            
            totalChanges += maxHeight - currentHeight; 
        }
    }
    
    return totalChanges; 
};