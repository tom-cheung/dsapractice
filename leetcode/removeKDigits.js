var removeKdigits = function(num, k) {
    let stack = []; 
    
    let index = 0; 
    
    // while there are numbers to be removed and I havent checked every single number keep running the code in the block 
    while(k > 0 && index < num.length) { // worse case is O(n) 
        let currentNum = parseInt(num[index]); 

        // if the stack is not empty && the last number is greater than the current number && I still have numbers to remove 
        // keep removing the last number until I find a smaller number, or I can no longer remove a number 
        while(stack.length > 0 && stack[stack.length - 1] > currentNum && k > 0) { // O(n * m) m being the size of stack 
            stack.pop();
            k--; 
        }
        // push the current number into the stack 
        stack.push(currentNum);
        // increment the index to check the next number 
        index++; 
    }
    
    // condition for if there are still numbers to be removed and the stack contains only sorted numbers 
    // pop off the largest number, which would be at the very end of the stack 
    while(k > 0 && index >= num.length && stack.length > 0) {  // iterate through stack / O(m)
        stack.pop(); 
        k--; 
    }
    
    // condition for if there are no other numbers to be removed, but I havent checked every single number 
    // in this case push every remaining number into the stack 
    while(k === 0 && index < num.length) {  // n 
        let currentNum = parseInt(num[index]); 
        stack.push(currentNum);
        index++; 
    }
    

    // remove LEADING zeroes from the stack 
    while(stack[0] === 0) {
        stack.shift(); 
    }
    
    //return a string "0" if the stack is empty otherwise return the numbers in the stack as a string
    if(stack.length === 0) {
        return "0";
    } else {
        return stack.join("")
    }
    
};



// assuming you can't change the order of the numbers 
// the best approach would be to remove the larger numbers starting from left to right 
// given 14239 and if you can only remove 1 number 
// removing any number would bring it down to 4 digits, but removing the number at the most valuable position gives the most impact  
// which number you remove should be any number larger than it's neighbor to the right
// 4239
// 1239 => smallest when you remove the 4 
// 1439
// 1423
// 1423
// the highest value would be the values starting from the 