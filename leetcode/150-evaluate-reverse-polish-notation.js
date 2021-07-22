var evalRPN = function(tokens) {
    let stack = []; // [10, 6, -132]
    
    for(let val of tokens) {
        
        if(!isNaN(parseInt(val))) {
            stack.push(parseInt(val))
        } else { // /
            let n1 = stack.pop(); // -132
            let n2 = stack.pop(); // 6
            let result; // -132
            
            if(val === '-') {
                result = n2 - n1;
            } else if(val === '+') {
                result = n1 + n2;touch
            } else if(val === '*') {
                result = n1 * n2; 
            } else if(val === '/') {
                let quotient = (n2 / n1);
                if(quotient < 0) {
                    result = Math.ceil(quotient);
                } else {
                    result = Math.floor(quotient);
                }
            }
            
            stack.push(result)
        }
    }
    
    return stack[0];
};

// iterate through the tokens
// if the current token is a number, push it into the stack 
// if it is not a number, than it is a operator
// pop off the last two numbers 
// perform the operation on the two numbers
// push the answer back into the stack 
// with division you have to account for negative numbers, negative numbers must be rounded up towards 0, and positive numbers must be rounded down towards 0 
// alternatively a way to divide is also to divide 1 by the denominator, then multiply it by the numerator, then truncuate it with Math.trunc(); 