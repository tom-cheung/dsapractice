var productExceptSelf = function(nums) {
    
    let product = 1; 
    let zeroCount = 0;
    let retArr = [];
    
    for(let num of nums) {
        if(num !== 0) {
            product *= num; 
        }
        
        if(num === 0) zeroCount++; 
        
        if(zeroCount > 1) {
            return new Array(nums.length).fill(0); 
        }
    }
    
    for(let num of nums) {
        if(zeroCount === 1 && num !== 0) {
            retArr.push(0)
        } else if(zeroCount === 1 && num === 0) {
            retArr.push(product);
        } else {
            retArr.push(product / num)
        }
    }
    
    return retArr; 
    
};