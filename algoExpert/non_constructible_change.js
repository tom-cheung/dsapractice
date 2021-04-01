// [1, 2, 4]

// create a variable to store the number of change you can make
// sort the array and iterate through it 
// each iteration compare it to the variable of the number of change 

// var change starts at 0 
// [ 1, 2, 4]

// 0 
// i guess you add 1 to it because you have to start checking the change to see if 1 can be made 
// 
// 1 => 1 => 

// 1, 1, 2, 3, 5, 7, 22

// 1 => 2 => 3 / 4 => 5 / 6/ 7 => 
// everytime you add a cent to the previous cent, it gives you 

// 1 1 5 
// 1 2 5 6 7

// 1 1 6 
// 1 => 2 
// if the subsequent coin is less than or equal to the previous total than 

// adding up the coins means you can make up to that amount max. 
// 