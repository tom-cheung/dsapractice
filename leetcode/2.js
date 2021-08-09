// given two linked lists, looks like arrays 
// add each link up from left to right 
// return a new list 
// example 
/**
 * [2,4,3]
 * [5,6,4]
 * [7,0,8]
 * 
 * 2 + 5 is 7
 * 
 * 4 + 6 is 10, leave the 0 carry the 1 
 *
 * 3 + 4 + 1 = 8 
 * 
 * tactic 
 * 
 * traverse the lists from left to right, both lists at the same time 
 * 
 * variable tracking the indices of each
 * variable(s) tracking the number at index 
 * an array to be returned
 * a variable tracking the numbers to be carried over
 * if a sum exceed 1 digit, convert it to a string and split it, save the left digit to the carry over variable 
 * push the right digit into the returning array 
 * if the sum is 1 digit, push it into the returning array 
 * 
 * function sum(l1, l2) {
 * 
 *      
 * 
 * }
 */

 var addTwoNumbers = function(l1, l2) {

    let var1 = l1; 
    let var2 = l2;
    let head = null; 
    let currentNode = null; 
    let carry = 0; 
    
    // the input linked lists may vary in their number of digits, i.e. [9,9,9,9,9,9] and [9,9,9,9]
    // so using this while loop I need the or condition to continue iterating until the longest input is finished 
    while(var1 || var2) {

        // if there is a current node then record it's value otherwise record a 0 
        let val1 = var1 ? var1.val : 0; 
        let val2 = var2 ? var2.val : 0; 

        let sum = val1 + val2 + carry; 
        let sumToString = sum.toString().split(""); 
        
        if(sumToString.length > 1) {
            
            let newNode = new ListNode(parseInt(sumToString[1])); 
            carry = parseInt(sumToString[0])
            
            // if there is no head, i.e. creating a new linkedlist 
            if(!head) {
                head = newNode; 
                currentNode = newNode; 
            } else {
                currentNode.next = newNode; 
                currentNode = newNode; 
            }
            
        } else {
            
            let newNode = new ListNode(parseInt(sum)); 
            carry = 0; 
            
            // if there is no head, i.e. creating a new linkedlist 
            if(!head) {
                head = newNode; 
                currentNode = newNode; 
            } else {
                currentNode.next = newNode; 
                currentNode = newNode; 
            }   
        }
        
        // if there is a current node, set it's next node as the current node, otherwise 0 
        var1 = var1 ? var1.next : 0; 
        var2 = var2 ? var2.next : 0; 
    }
    
    if(carry > 0) {
        let newNode = new ListNode(carry); 
        currentNode.next = newNode; 
    }
    
    return head; 

};