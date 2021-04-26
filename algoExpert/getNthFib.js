// recursive solution 

function getNthFib(n) {
    if(n === 1) return 0; 
    if(n === 2) return 1; 

    return getNthFib(n - 1) + getNthFib(n - 2); 
}

// 2^n  time, which is pretty bad, every time this function is called, it calls 2 more functions, 
// think of a tree branching twice from each node. It grows by a lot 


// the below iterative solution is better 
// it runs in linear time because it only loops until it hits the nth number 
// it has constant space because the variable twoFibs wont grow past 2 and count is just being incremented

// the logic is, take the last two fibs add them to get the third one, reposition the 2nd fib to the first and change the 2nd to the 3rd
// repeat this until you have the nth fib 
// the return statement accounts for if the 1st fib is asked for which is at index 0, otherwise all nth fibs are at index 1 

function getNthFib(n) {

    let twoFibs = [0, 1]; 
    let count = 3; // start at 3 because you already have the first two 

    // if the below loop runs it starts counting the third fib starts counting the third fib 
    while(count <= n) {
        let nextFib = twoFibs[0] + twoFibs[1]; 
        twoFibs[0] = twoFibs[1]; 
        twoFibs[1] = nextFib;
        count++
    }

    return n > 1 ? twoFibs[1] : twoFibs[0]; 


}

// recursive function with memoization, which improves the time complexity but space complexity is still worse than the iterative 
// because the memo will grow to n length

function getNthFib(n, memo={}) {
    if(n === 0) return 0; 
    if(n === 1) return 1; 
    
    if(n in memo) {
        return memo[n];
    } else {
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo); 
        return memo[n]; 
    }
    // return fib(n - 1) + fib(n - 2); 
}