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

// time complexity wise this is O(n) but it is faster than the above which is also O(n)

// it's easier to understand if instead of mutating prod array you generate two arrays, one for left products and one for right 
// looks like 

// [1, 2, 3, 4]
// left => [1, 1, 2, 6]
// right => [24, 12, 4, 1]
// notice that each number is the product of all the numbers to the indicated side 
// what is missing is itself and all the numbers to the opposite side 
// so if you were to get both sides, multiplying them together would give you the product of all numbers aside from itself 

// using the example [1, 2, 3, 4]
// notice on right [24, 12, 4, 1], the 12 is the product of 3 * 4 but does not include 2 or 1
// notice on left [1, 1, 2, 6], the 1 is the product of 1, and does not include 2, 3, 4 
// so using both arrays you can get the products of either side of the number 



var productExceptSelf2 = function(nums) {
    
    let prodArr = new Array(nums.length).fill(1); 
    let prodLeft = 1; 
    let prodRight = 1; 
    
    for(let i = 0; i < nums.length; i++) {
        prodArr[i] = prodLeft; 
        prodLeft *= nums[i];
    }
    
    for(let i = nums.length - 1; i >= 0; i--) {
        prodArr[i] *= prodRight; 
        prodRight *= nums[i]
    }
    
    return prodArr; 
    
};