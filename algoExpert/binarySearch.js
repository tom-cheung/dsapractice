function binarySearch(arr, target, mid=0) {
      
    // time O(1)
      if(arr.length === 1) {
          if(arr[0] === target) {
              return 0; 
          } else {
              return -1; 
          }
      }
      
    //   time O(1)
      mid = Math.floor(arr.length / 2); 
      let midEl = arr[mid];
      
      if(midEl === target) return mid; 
      
      if(midEl > target) {
    //   slice has an O(n) time complexity, will affect the complexity of this algorithm
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


// O(log n) since I am not using slice 
function binarySearch(arr, target, left=0, right=arr.length - 1) {

    if(left > right) return -1; 

    let mid = Math.floor((left + right) / 2); 

    if(arr[mid] === target) return mid; 

    if(target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, right); 
    }

}
