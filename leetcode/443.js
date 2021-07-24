var compress = function(chars) {
    
    let origLength = chars.length - 1;  
    let currentChar = chars.shift(); 
    let frequency = 1; 
    
    while(origLength) {
        let removed = chars.shift(); 
        if(removed === currentChar) {
            frequency++; 
        }
        if(removed !== currentChar) {
            chars.push(currentChar);
            if(frequency > 1) {
                for(let c of frequency.toString().split('')) chars.push(c);
            }
            currentChar = removed; 
            frequency = 1; 
        }
        
        origLength--; 
    }
    
    chars.push(currentChar);
    if(frequency > 1) {
        for(let c of frequency.toString().split('')) chars.push(c);
    }

    return chars.length;
    
};

// chars, an array of characters 
// compress the characters 
// according to the rules
    // ['a', 'b', 'b', 'c', 'c'....], ['a', 'b', '2', 'c', '1', '0']
// return 6

// ['a', 'b', 'b', 'c', 'c', 'c']
// ['a', 'b', '2', 'c'] stack 
// use a stack
// iterate through the chars array
// pop off the last char of the stack
// if the popped off char is not equal to the current character, then push the popped off version back into the INPUT array followed by a string version of count followed by the new char, reset count 
// 
// if the popped off char IS equal to the popped off char, then push in the new char and increment count 

// ['a']

// track index 6 
// shift off the first char 