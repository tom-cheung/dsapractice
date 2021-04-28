function isMonotonic(array) {
    // Write your code here.
    //   if(array.length <= 1) return true; // O(n) time  dont need this, since if directions is empty it returns true as well 
      let directions = {}; // O(n) time 
      // console.log(direction)
  
      for(let i = 0; i <= array.length - 2; i++) { // O(n)
          let num1 = array[i]; 
          let num2 = array[i+1]; 
          
          if(num1 > num2) directions['decreasing'] = true; 
          if(num1 < num2) directions['increasing'] = true; 
      }
  
      return Object.keys(directions).length <= 1; // max keys 2, constant? 
  }