function smallestDivisor(nums, threshold) {

    let left = 1, right = 10e6; 

    while(left < right) {
        let divisor = Math.floor((left + right) / 2); 
        let sum = 0; 
        for(let num of nums) {
            sum += Math.ceil(num /divisor); 
        }

        // if the sum is greater than you need to reduce it
        // because you're working with a sorted range of nums 
        // you can increase the smallest number to the mid since the mid is too small  
        sum > threshold ? left = divisor + 1 : right = divisor; 
    }

    return left; 
}

// use binary search to find the smallest divisor 
// you have to check multiple divisors, binary search just optimizes that search 