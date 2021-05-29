function binarySearch(arr, target, mid=0) {
      
      if(arr.length === 1) {
          if(arr[0] === target) {
              return 0; 
          } else {
              return -1; 
          }
      }
      
      mid = Math.floor(arr.length / 2); 
      let midEl = arr[mid];
      
      if(midEl === target) return mid; 
      
      if(midEl > target) {
          let left = arr.slice(0, mid);
          return binarySearch(left, target, mid); 
      } {
          let right = arr.slice(mid + 1); 
          let result = binarySearch(right, target, mid)
  
          if(result === -1) {
              return -1; 
          } else {
              return mid + result + 1; 
          }
      }
      
      
  }