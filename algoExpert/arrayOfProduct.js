function arrayOfProducts(nums) {
    // Write your code here.
      
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