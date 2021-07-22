// input is an array of strings
// goal is to return an array 
// containing subarrays of anagrams from the string 

// initial thought 
// go through every string in the array 
// compare it to every previous string and check if they are anagrams of each other 
// if they are not set them in their own group 

// ['eat', 'tea', 'tan', 'ate', 'nat']

// 'eat' = ['eat', 'tea', 'ate']
// 'tan' = ['tan', 'nat'] => hashmap 


// 'eat', nothing to compare it to, set it within its own group, compare all subsequent strings to it 
// 'tea', compare it to 'eat', is an anagram, save it with 'eat'
// 'tan', compare it to 'eat', is not an agagram, save it to itself
// 'ate', compare it to eat and tan, anagram of eat, save it to the same group
// 'nat', compare it to eat and tan, anagram of tan, save it to that group

//create a hashmap with keys being words to compare against, values being arrays 
//

function func(strs) {

    let anagrams = {}; 

    for(let str of strs) {
        let sortedStr = str.split("").sort().join(""); // only works if you're allowed to use .sort(); 

        if(anagrams[sortedStr] === undefined) {
            anagrams[sortedStr] = []; 
        }

        anagrams[sortedStr].push(str); 
    }

    // for(let str of strs) {
    //     if(Object.keys(anagrams).length === 0) {
    //         anagrams[str] = [str];
    //     } else {
    //         let keys = Object.keys(anagrams); 
    //         let anagram = false; 
    //         for(let key of keys) {
    //             if(isAnagram(key, str)) {
    //                 anagrams[key].push(str);
    //                 anagram = true;    
    //             }
    //         }
    //         if(!anagram) anagrams[str] = [str]; 
    //     }
    // }

    return Object.values(anagrams); 
}

function isAnagram(str1, str2) {
    let str1Count = {}; 

    for(let char of str1) {
        if(str1Count[char] === undefined) {
            str1Count[char] = 1; 
        } else {
            str1Count[char]++; 
        }
    }

    for(let char of str2) {
        str1Count[char]--; 
    }

    for(let val of Object.values(str1Count)) {
        if(val !== 0) return false;
    }

    return true; 

}

console.log(func(["eat","tea","tan","ate","nat","bat"]))

// worst case scenario would be a list of strings that are not anagrams of each other, 
// I would have to run through the list of anagrams a number of times equal to  
// too slow 