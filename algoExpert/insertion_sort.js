function insertionSort(array) {
    // Write your code here.
      
      // [8,5,2,9,5,6,3]
    // [5,8,2,9,5,6,3]
      // [5,2,8,9,5,6,3]
      
      // a standalone number is sorted 
      // so any number within the array, by itself is sorted 
      // starting at the first number, it's sorted 
      // iterate through the array 
      // check the current number against the previous number, if the previous number is greater or null then move on 
      for(let i = 0; i < array.length; i++) {
          let prev = i - 1;
          while(prev >= 0 && array[prev] > array[prev + 1]) {
              let prevNum = array[prev]; 
              array[prev] = array[prev + 1];
              array[prev + 1] = prevNum; 
              prev--; 
          }
      }
      
      return array; 
  }