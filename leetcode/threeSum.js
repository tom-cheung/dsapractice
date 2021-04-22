function threeNumberSum(array, targetSum) {
    // Write your code here.
      
      let threeNums = []; // On
      
      let sortedArr = array.sort((a, b) => a - b);  // O(nLogn)
      
      for(let i1 = 0; i1 < sortedArr.length - 2; i1++) { // On
          let num1 = sortedArr[i1];
          let i2 = i1 + 1; 
          let i3 = sortedArr.length - 1; 
          
          while(i2 !== i3) {
              
              let sum = num1 + sortedArr[i2] + sortedArr[i3]; 
              
              if(sum === targetSum) {
                  threeNums.push( [ num1, sortedArr[i2], sortedArr[i3] ]); 
                  i2++; 
              } else if(sum < targetSum) {
                  i2++; 
              } else if(sum > targetSum) {
                  i3--; 
              }
          }
      } 
      
      return threeNums; 
  }
  