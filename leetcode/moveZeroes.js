



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