function MinWindowSubstring(strArr) { 

    // code goes here  

    // ["ahffaksfajeeubsne", "jefaa"]


    let window = strArr[1].length // => 5
    let keys = strArr[1]; // jefaa 
    let string = strArr[0]; // ahffaksfajeeubsne
  
    while(window <= string.length) { // 5 <= 17 
  
      for(let i = 0, j = i + window; j <= strArr[0].length; i++, j++) {
          
        let subString = strArr[0].slice(i, j)
        if(containsAll(subString, keys)) {
          return subString
        }
      }
  
      window++; 

    }
  
    return string; 
  }

  
  function containsAll(str, keys) {
    let strCount = {}; 
    let keyCount = {}; 
  
    for(let char of str) {
      if(strCount[char] === undefined) {
        strCount[char] = 1;
      } else {
        strCount[char]++;
      }
    }
  
    for(let key of keys) {
      if(keyCount[key] === undefined) {
        keyCount[key] = 1; 
      } else {
        keyCount[key]++;
      }
    }
  
  
    for(let key of Object.keys(keyCount)) {
      if(keyCount[key] !== strCount[key]) {
        return false; 
      }
    }
  
    return true; 
  }

  console.log(containsAll('affhkkse', 'fhea'))

//   console.log(MinWindowSubstring(["a affh kksemckelloe", "fhea"]))