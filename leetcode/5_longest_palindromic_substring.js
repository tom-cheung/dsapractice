
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
                    substring.unshift(str[left])			;
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

console.log(longestPalindrome('bb'))

// a
// aa
// aba 
// baab 
// abyccyb