function bubbleSort(array) {
      
      let sorted = false; 
      
      // time complexity O(n * n) or O(n^2) because worst case a number at the very end of the array needs to be shifted across the length of the array 
      // which requires a number of passes equal to the length of the array 
      // including one last time to confirm the array is sorted 

      // space complexity is constant as I am overwriting the existing array, but would be O(n) if I had to create a copy of the array 
      while(!sorted) {
          sorted = true; 
          for(let i = 0; i < array.length - 1; i++) {
              if(array[i] > array[i + 1]) {
                  let nextEl = array[i + 1]; 
                  array[i + 1] = array[i]; 
                  array[i] = nextEl; 
                  sorted = false; 
              }
          }
      }
      
      return array; 
  }