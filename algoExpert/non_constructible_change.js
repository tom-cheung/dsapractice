// the overall logic is 
    // create a variable (call it C) to store the number of sets of change you can make, i.e [1, 2] => 3 sets of change [1, 2, 1 & 2]
        // [1] => 1 => equal to the total and the different combo of coins 
        // [1, 1] => 2 => equal to the total and the different combo of coins 
        // [1, 2] => 3 => equal to the total and the different combo of coins 
        // [1, 5] => 6 => equal to the total but NOT the different combo of coins
        // the subsequent coins, if it is greater than the previous combo count / total then 
        // if the subsequent coin is equal to or less than the previous combo/total + 1 then you know you can create C + subsequent coin combos means consecutives up to the total    
        // the logic is that the previous C will allow you to build values from 1 to C  
        // 
// the variable representing the change you can make, 
// logic is if the subsequent coin is greater than the change you can already make + 1 then you can't make  change + 1 
// If the 