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


// time complexity of O(log n) since I am not using slice 
// space complexity of O(log n) 
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

// it's like a window, you close the left/right depending whether the target equals to the middle 
function binarySearch1(arr, target, left=0, right=arr.length - 1) { // 2 / 3
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);  // 2 + 3 = 5 / 2 => 2 
        if(target === arr[mid]) return mid; // 33 !== 1 
        if(target < arr[mid]) { // 33 < 1 
            right = mid - 1; 
        } else {               // 33 > 1 
            left = mid + 1; 
        }
    }

    return -1; 
}

console.log(binarySearch1([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 4)); 


