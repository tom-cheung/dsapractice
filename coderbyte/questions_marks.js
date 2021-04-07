function QuestionsMarks(str) { 

    // code goes here
    let indices = []; 
    
    
    for(let i = 0; i < str.length; i++) {
      let char = str[i]
      if(!isNaN(parseInt(char))) {
        indices.push(i)
      }
    }
  
    let valid = false; 
  
    for(let i = 0; i < indices.length - 1; i++) {
      let start = indices[i]; 
      let end = indices[i+1]; 
      
      if(parseInt(str[start]) + parseInt(str[end]) === 10) {
        valid = true; 
        if(!ThreeQ(str.slice(start, end+1))) {
          return false; 
        }
      }
    } 
  
    return valid; 
  }
  
  function ThreeQ(str) {
    let qCount = 0; 
  
    for(let i = 0; i < str.length; i++) {
      if(str[i] === "?") {
        qCount++;
      }
    }
  
    return qCount === 3; 
  }