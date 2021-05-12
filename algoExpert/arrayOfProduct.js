function arrayOfProducts(nums) {
    // time complexity, I have traversing the nums array twice so 2n, drop the constant leaving a time complexity of n 
    // space complexity of n for the numsCopy array which is the same length as the nums input array 
      
      let left = 1; // 20
      let right = 1; // 8 
      let numsCopy = Array.from(nums); 
      
      for(let i = 0; i < nums.length; i++) {
          numsCopy[i] = left; 
          left*= nums[i]; 		
      }
  
      for(let i = nums.length - 1; i >= 0; i--) {
          numsCopy[i]*= right; 
          right*= nums[i]
      }
  
      return numsCopy; 
  }