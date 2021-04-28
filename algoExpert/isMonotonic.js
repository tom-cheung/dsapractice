function isMonotonic(array) {
    // Write your code here.
      if(array.length <= 1) return true; 
      let directions = {}; 
      // console.log(direction)
  
      for(let i = 0; i <= array.length - 2; i++) {
          let num1 = array[i]; 
          let num2 = array[i+1]; 
          
          if(num1 > num2) directions['decreasing'] = true; 
          if(num1 < num2) directions['increasing'] = true; 
      }
  
      return Object.keys(directions).length <= 1; 
  }