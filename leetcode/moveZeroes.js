// bubble sort 

function moveZero(nums) {

    let moved = false; 

    while(!moved) {
        moved = true; 
        for(let i = 0, j = i + 1; i < nums.length - 2; i++) {
            let num1 = nums[i];
            let num2 = nums[j]; 

            if(num1 === 0 && num2 !== 0) {
                nums[i] = num2; 
                num[j] = num1; 
                moved = false; 
            }
        }
    }
    return nums; 
}

// [1, 3, 12, 0, 0]

[1, 0, 43, 0, 2, 1]

[1, 43, 2, 1, 0, 0]

[0, 1, 0, 3, 12]; 

// take out 0 
// place at the end 
// 0 gets pushed to the end 



// 2n => n 
// space is n 

function moveZero(nums) {

    let nonZero = []; // time => O(1); 

    for(let i = 0; i < nums.length; i++) { // time => O(n)
        if(num !== 0) nonZero.push(nums[i]); 
        nums[i] = 0; 
    }

    for(let i = 0; i < nonZero.length; i++) { // time => O(n) 
        nums[i] = nonZero[i];
    }

    return nums; 

}