let input = [1, 4, 3, 1, 6, 3, 6, 8, 6, 5, 7]; 

// [14, 28, 12, 14]


let countingSort = (arr, min, max) => { 
    let i = min, // 12
        j = 0, //0 
        len = arr.length, // 4 
        count = []; //

    for (i; i <= max; i++) { // [ ] of 29 items 
        count[i] = 0;
    }


    for (i = 0; i < len; i++) { // 
        count[arr[i]] += 1;
    }

    console.log(count); 

    // this count is almost like a hash where the index is the key and the element at that index is the frequency of that key 
    // how do you get the largest and smallest without iterating through the entire input array 
    // knowing that you have this 

    for (i = min; i <= max; i++) {
        console.log(i)
        console.log(count[i])
        console.log('---')
        // while count of 12 is greater than 0 => skips any zero values, only runs when you hit a non zero value 

        while (count[i] > 0) {
            arr[j] = i;
            // used to increment through the input array 
            j++;
            count[i]--;
        }
    }
    return arr;
};

function countingSortTwo(arr) {
    let count = []; // purpose of count is to act like a hash where the index represents a key and the element at that index the value  
    let min = arr[0]; 
    let max = 0; 
    let j = 0; 


    for(let num of arr) { // i am iterating through the entire arr and, using the indices of count to represent the elements and their values as frequency
        if(num < min) { // also finding the largest and smallest numbers to help iteration 
            min = num; 
        }
        if(num > max) {
            max = num
        }
        if(count[num] === undefined) {
            count[num] = 1; 
        } else {
            count[num]++; 
        }
    }

    for(let i = min; i <= max; i++ ) { 
        // once count is set then I can iterate through it, using the min and max values recorded above, and using j to reset each value
        // of the input array to the elements in order 
        while(count[i] > 0) {
            arr[j] = i; // important you index into j 
            count[i]--;  
            j++; 
        }

    }

    return arr; 
}

console.log(countingSortTwo([14, 28, 12, 14]))

// funny count sort 

let funnyArray = []; 

let numbers = [5, 4, 2, 1, 4, 5, 4, 9, 9, 9, 7, 3, 1, 1]


for(let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    
    if(funnyArray[num] === undefined) {
        // funnyArray[num] = {1: [i]}
        funnyArray[num] = [i]
    } else {
        funnyArray[num].push(i)
        // let frequency = Object.keys(funnyArray[num])[0]; 
        // ***** // funny enough funnyArray[num][frequency].push(i) doesn't work *****
        // let arr = funnyArray[num][frequency]; 
        // arr.push(i)
        // let newFrequency = parseInt(frequency)
        // funnyArray[num] = {[newFrequency+= 1]: arr}; 
    }

}

console.log(funnyArray); 