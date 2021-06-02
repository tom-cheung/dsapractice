
var longestPalindrome = function(str) {
    
    if(str.length === 1) return str; 
    
    let longest = ''; 
    let longestCount = 0; 



    for(let i = 0; i < str.length; i++) {
        
         if(str[i].length > longestCount) {
             longest = str[i];
             longestCount = str[i].length; 
         }

	    if(str[i - 1] === str[i + 1]) {
	    	let left = i - 1; 
	    	let right = i + 1; 
	    	let substring = [str[i]]				

	    	while(str[left] !== undefined && str[right] !== undefined && str[left] === str[right]) {
                if(str[left] !== undefined && str[right] !== undefined && str[left] === str[right]) {
                    substring.unshift(str[left]);
                    substring.push(str[right]); 
                }
	    		left--; 
	    		right++; 			
	    	}

	    	if(substring.length > longestCount) {
	    		longest = substring.join(""); 
	    		longestCount = substring.length; 
	    	}
        
	    } 
    
        if(str[i] === str[i + 1]) {
	    	let left = i; 
	    	let right = i + 1; 
	    	let substring = [str[i], str[i + 1]]; 

            if(str[left] === str[right]) {
                while(str[left] !== undefined && str[right] !== undefined && str[left] === str[right] ) {
                    left--; 
                    right++; 
                    if(str[left] !== undefined && str[right] !== undefined && str[left] === str[right]) {
                        substring.unshift(str[left]); 
                        substring.push(str[right]); 
                    }
                    
                }
            }

            if(substring.length > longestCount) {
                longest = substring.join(""); 
                longestCount = substring.length; 
            }
        }
        

    }

    return longest; 
    
};

let longestPalindrome2 = function(str) {


    let longest = ''; 
    let count = 0; 

    for(let i = 0; i < str.length; i++) {

        let subs = str[i]; 

        if(i - 1 >= 0 && i + 1 < str.length && str[i - 1] === str[i + 1]) {
            let left = i - 1; 
            let right = i + 1; 

            while(left >= 0 && right < str.length && str[left] === str[right]) {
                subs = str[left] + subs; 
                subs += str[right]; 
                left--; 
                right++; 
            }

            if(subs.length > count) {
                longest = subs; 
                count = subs.length; 
                subs = ''; 
            }
        }

        if(i >= 0 && i + 1 < str.length && str[i] === str[i + 1]) {
            let subs = ""; 
            let left = i; 
            let right = i + 1; 
            while(left >= 0 && right < str.length && str[left] === str[right]) {
                subs = str[left] + subs; 
                subs += str[right]; 
                left--; 
                right++; 
            }

            if(subs.length > count) {
                longest = subs; 
                count = subs.length; 
                subs = ''; 
            }
        }

        if(subs.length > count) {
            longest = subs; 
            count = subs.length;
        }
    }

    return longest; 
}

console.log(longestPalindrome2('abcd'))

// a
// aa
// aba 
// baab 
// abyccyb