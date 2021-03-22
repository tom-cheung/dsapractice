function isAnagram(word1, word2) {
    let charCounter = {}; 
    
    for(let char of word1) {
        if(!charCounter[char]) {
            charCounter[char] = 1;
        } else {
            charCounter[char]++; 
        }
    }

    // console.log(charCounter);
    
    for(let char of word2) {
        if(!charCounter[char]) {
            return false; 
        } else {
            charCounter[char]--; 
        }
    }

    // return Object.values(charCounter);

    for(let val of Object.values(charCounter)) {
        if(val !== 0) {
            return false; 
        }
    }

    return true; 
}

function funWithAnagrams(text) {
    // Write your code here
    
    let uniqueStr = [text.shift()]; 
    
    while(text.length > 0) {
        let currentStr = text.shift(); 
        let anagram = uniqueStr.some(str => isAnagram(str, currentStr));
        
        if(!anagram) {
            uniqueStr.push(currentStr);
        }
    }
    
    return uniqueStr.sort(); 
}


function maximumOccurringCharacter(text) {
    // Write your code here
    
    let charCount = {}; 
    
    for(let char of text) {
        if(!charCount[char]) {
            charCount[char] = 1; 
        } else {
            charCount[char]++;
        }
    }
    
    let mostFrequent = "";
    let frequency = 0;  
    
    for(let char of Object.keys(charCount)) {
        if(charCount[char] > frequency) {
            mostFrequent = char; 
            frequency = charCount[char];
        }
    }
    
    return mostFrequent; 
}