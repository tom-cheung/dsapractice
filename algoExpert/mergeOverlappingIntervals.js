function mergeOverlappingIntervals(arr) {
    arr.sort((a, b) => a[0] - b[0] ); 
      let merge = []; 
      let start = 0; 
      let end = 0; 
  
      for(let i = 0; i < arr.length; i++) {
  
          let currInterval = arr[i]; 
          let currStart = currInterval[0]; 
          let currEnd = currInterval[1]
  
          if(start === 0 && end === 0 ) {
              start = currStart; 
              end = currEnd; 
          } 
  
          if(currStart <= end) {
              if(currEnd > end) end = currEnd; 
          } else {
              merge.push([start, end]); 
              start = currStart; 
              end = currEnd; 
          }	
          
          if(i === arr.length - 1) {
              
              merge.push([start, end]); 
          }
      }
  
      return merge; 
  }