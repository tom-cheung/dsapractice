var removeKdigits = function(num, k) {
    let stack = []; 
    
    let index = 0; 
    
    while(k > 0 && index < num.length) { // worse case is O(n) 
        let currentNum = parseInt(num[index]); 
        while(stack.length > 0 && stack[stack.length - 1] > currentNum && k > 0) { // O(n * m) m being the size of stack 
            stack.pop();
            k--; 
        }
        stack.push(currentNum);
        index++; 
    }
    
    while(k > 0 && index >= num.length && stack.length > 0) {  // iterate through stack / O(m)
        stack.pop(); 
        k--; 
    }
    
    while(k === 0 && index < num.length) {  // n 
        let currentNum = parseInt(num[index]); 
        stack.push(currentNum);
        index++; 
    }
    
    while(stack[0] === 0) {
        stack.shift(); 
    }
    
    if(stack.length === 0) {
        return "0";
    } else {
        return stack.join("")
    }
    
};