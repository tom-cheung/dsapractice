var getLengthOfOptimalCompression = function(s, k) {
  let firstCompress = compress(s); 
  let currentIdx = 0; 
  let varString = {}; 

  let letsgo = false; 
  while(!letsgo) {
      letsgo = true; 
      let cpS = s.split('');
      let remove = k; 
      let idx = -1; 
      for(let i = 1; i < firstCompress.length; i+= 2) {
          idx += firstCompress[i]; 
          if(firstCompress[i] - remove <= 0) {
              let c = firstCompress[i];
              let idx2 = idx; 
              while(c > 0) {
                  cpS[idx2] = '-';
                  idx2--; 
                  c--; 
              }
          }
      }
      console.log(compress2(cpS.join("").split('-').join('')));
  }



  // aabbaa, k = 2
  // a2b2a2

  // bbaa, b2a2
  // aaaa, a4
  // aabb, a2b2

  // a2b2a2
  // index of the first a is 0 to the frequency - 1
  //  

  // aaabcccd, k = 4
  // a3b1c3d1

  // current index would be the running total of the ints so 0 + 3 - 1 = 2, + 1 = 3, + 3 = 6 + 1
  // start with -1, add the ints, gives you the current index 

  // aaaccc, a3c3
  // abcccd, abc3d
  // aaaccd, a3c2d
  // aaabcd, a3bcd
  // aaabcc, a3bc2

  // aaaaaaaaaaa, k = 10
  // a10   
  
  // a, a 

  // some like bubble sort type approach, make multiple passes 

  // acccccccccc
     
};

function compress(s) {
    let arr = s.split('');
    let origLength = arr.length - 1; 
    let currentChar = arr.shift();
    let freq = 1;   
  
    while(origLength) {
        let removed = arr.shift(); 
        if(removed === currentChar) {
            freq++; 
        } else if(removed !== currentChar) {
          arr.push(currentChar); 
          for(let c of freq.toString().split('')) arr.push(parseInt(c));
          currentChar = removed; 
          freq = 1; 
        }
        origLength--; 
    }  
  
    arr.push(currentChar);
    for(let c of freq.toString().split('')) arr.push(parseInt(c));

    return arr; 
}

function compress2(s) {
    let arr = s.split('');
    let origLength = arr.length - 1; 
    let currentChar = arr.shift();
    let freq = 1;   
  
    while(origLength) {
        let removed = arr.shift(); 
        if(removed === currentChar) {
            freq++; 
        } else if(removed !== currentChar) {
          arr.push(currentChar); 
          if(freq > 1) for(let c of freq.toString().split('')) arr.push(parseInt(c));
          currentChar = removed; 
          freq = 1; 
        }
        origLength--; 
    }  
  
    arr.push(currentChar);
    if(freq > 1)  for(let c of freq.toString().split('')) arr.push(parseInt(c));

    return arr.join(""); 
}

// console.log(getLengthOfOptimalCompression('aabbaa', 2));

// a10b5
// a5b5 
// a10

// as I iterate through, when I reach the point of pushing a char and it's freq into an array 
// if the freq is less than or equal to k 
// push decrement k by the freq, 
// if k hits 0, save the remaining string 
// reset k to the original value to try and remove any subsequent 
// if you have the compressed string, you could identify which chars to remove from the original string 
// essentially forming a new string 
// and compressing that string 

// i am given a string and a quota of characters from the string that I can remove
// the goal is to remove up to the quota of characters from the string so that 
// when the string is compressed it will comprise the smallest number of characters

// compressing a string involves consecutive similar characters being represented by just 1 character followed by it's frequency
// a character that appears once is represented by just itself 

// thinking about this problem 
// it seems like one goal is to find which combination of characters to remove

// 

// compressing the end string to determine length, not sure if this is a problem 

var getLengthOfOptimalCompression = function(s, k) { // the inputs are a string, and a int representing how many characters can be removed 
    const n = s.length; // records the original length of the string 
    let dp = {}; // an object, this is accessible by the function dfs

    function dfs(i, j) { // this function takes in two variables, 
        console.log('line 108 ', i, j)
        console.log(dp);
      if (i === n) return 0; // if i is the length of the string, return 0  
      const ik = [i, j] + ''; // seems to convert this array of [i,j] into string 'i,j', starts at say '0,2', and saves it as  in the dp object
      if (ik in dp) return dp[ik]; // checks if ik is in dp then return it's value 
      let r = -1; // a variable called r with a -1 value 
      if (j) r = dfs(i + 1, j - 1); // if j is greater than 0, recursive call to dfs while incrementing i by 1 and decrementing j by 1, j is k, if r is equal to 0, the recusive call ends
      
      // once j - which is k - hits 0, the code proceeds past this point 
      
      console.log('line 117')
      let ii = i + 1; // variable of i + 1
      let c = 1; // variable of 1 
      while (ii <= n) { // while i + 1 is less than the original length of the string 
        let t = dfs(ii, j) + 1; // recursive call with (i + 1, j or j), => 0 + 1 = 1; 
        console.log('line 122')
        // maybe this tracks the number of characters for the frequency 
        if (c >= 100) t += 3; 
        else if (c >= 10) t += 2;
        else if (c > 1) t += 1;
        if (r < 0 || r > t) r = t;
        if (ii == n) break;
        if (s[ii] == s[i]) c += 1;
        else {
          if (j == 0) break;
          j -= 1;
        }
        ii += 1;
      }
      dp[ik] = r;
      return r;
    }

    return dfs(0, k); // calls the dfs function and provides the inputs of 0, and k 
};

console.log(getLengthOfOptimalCompression('aaabcccd', 2));