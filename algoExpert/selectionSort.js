function selectionSort(array) {
    // Write your code here.
      let left = 0;
      while(left < array.length) {
          let smallest = left; 
          for(let i = left; i < array.length; i++) {
              if(array[i] < array[smallest]) {
                  smallest = i; 
              }
          }
          if(smallest > left) {	
              let smallestVal = array[smallest]; 
              array[smallest] = array[left];
              array[left] = smallestVal; 
          }
          left++;  
      }
      return array; 
  }
  
  // array of numbers is the input 
  // selection sort makes use of multiple passes along the array
  // to find the smallest element and swap it for elements starting from the left
  // have a pointer starting from the left
  // have a variable tracking the index of smallest number against the el at the pointer
  // at the end of the loop swap the smallest element with the element at the point 
  // increment the pointer, iterate through the array from that pointer