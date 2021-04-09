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

  // console.log(containsAll('affhkkse', 'fhea'))

//   console.log(MinWindowSubstring(["a affh kksemckelloe", "fhea"]))

// aaabaaddae / aed 
// a a a b a a d dae

// abc  

function MinWindowSubstring2(strArr) {
  let target = strArr[1];
  let search = strArr[0];

  // creates the hash of key value pairs for the target 
  let targetList = {};
  let searchList = {}; 

  for(let char of target) {
    if(targetList[char] === undefined) {
      targetList[char] = 1; 
    } else {
      targetList[char]++; 
    }
  }

  let left = 0; 
  let right = 0; 

  while(right < search.length) {
    let subS = search.slice(left, right + 1);
    
    for(let char of subS) {
      if(targetList[char] !== undefined && searchList[char] === undefined) {
        searchList[char] = 1; 
      } else if(targetList[char] !== undefined && searchList[char] !== undefined) {
        searchList[char]++; 
      }
    }
    // console.log(subS);
    right++;; 
  }

  console.log(searchList)

  return targetList; 
}

console.log(MinWindowSubstring2(["aaffhkksemckelloe", "fhea"]))