// return boolean value => whether one row is either all taller or shorter than the other
// check if the first element of each row is taller or shorter => save the true/false value to a variable 
// check subsequent elements, and if any deviate than it's not possible  

// [5, 4, 7]
// [3, 2, 4]



// 5 > 3 === true  => let taller = true; 

// 4 > 1 === taller / if false then return false 

// [3, 2, 4]
// [5, 4, 7] => 4, 7, 5
// [3, 4, 2] => 2, 3, 4

// sort both arrays b/c you can rearrange the students 
// if there are any equal heights at the same indices return false 
// otherwise record whether the first student is taller or shorter  
// all subsequent students have to be follow the first comparison 
 


function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
      
      let sortedRed = redShirtHeights.sort((a,b) => a - b);
      let sortedBlue = blueShirtHeights.sort((a,b) => a - b);
      
      if(sortedRed[0] === sortedBlue[0]) return false; 
  
      let taller = sortedRed[0] > sortedBlue[0]; 
      
      for(let i = 1; i < redShirtHeights.length; i++) {
          if(sortedRed[i] === sortedBlue[i]) return false; 
          let compare = sortedRed[i] > sortedBlue[i];
          if(taller !== compare) return false; 
      }
    return true;
  }
  
