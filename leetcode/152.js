

var maxProduct = function(nums) {

    if(!nums && !nums.length) return nums; 
    
    const n = nums.length; 

    let prevMax = nums[0]; 

    let prevMin = nums[0]; 

    let maxSoFar = nums[0]; 

    for(let i=1; i<n; i++){ 
        // find the max and min given this current number, this is like the running 
        let localMax = Math.max(prevMax * nums[i], nums[i], prevMin * nums[i]); 

        // to account for the case of a negative * negative 
        let localMin = Math.min(prevMax * nums[i], nums[i], prevMin * nums[i]);  
        
        // now you change the actual running max and min
        // given this new number, what is now the max and what is the min? 
        // if the max was the product then you keep counting the product, if it is the number you count the number, if it is product of the min 
        // times the number then that's the max
        // the latter is why you track the min also, because of negatives. 
        prevMax = Math.max(localMax, localMin); 
        prevMin = Math.min(localMax, localMin);
        
        // given the current number, set the maxSoFar to the new number if it is in fact the largest. 
        maxSoFar = Math.max(maxSoFar, prevMax);
    }
    
    return maxSoFar;
};

console.log(maxProduct([2, 3, -2, 4])); 

// BEING FRUSTRATED IS NOT ALWAYS A BAD THING. Remember that it can show you your limits and what you have to work on. 

// [2, 3, -2, 4, 2]

// goal is to find the max product produced by a contigous subarray 
// dont really care about [2, 3], just their products 
// when -2 is brought in, how does it affect the product? 
// at this point I have already recorded 6 (product of 2 and 3), don't really care about or about [2, 3]
// if -2 was a positive 2 then it just increases the product 
// but if it's negative which it is, then I dont care about what comes before it, I care about the previous largest because 
// if it's negative you know it'll just bring down the previous 

// I would also care about the smallest, which if all numbers we positive it doesn't matter, but because there are negatives 
// a negative times a negative could instantly become a big positive 