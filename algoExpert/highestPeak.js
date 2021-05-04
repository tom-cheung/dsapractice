// given an array of integers, return the length of the highest peak 
// a peak is an integer that is greater than the value to the left and to the right of it 

// [1 , 4, 10, 2] => 4
// [5, 1, 4, 10, 2] => 4

// [1, 4, 10, 2]

// [5, 1, 4, 10, 2, 1, 0, -1, -2, 3, 1] => 8 

// [5]

// if the array is empty return 0 

function highestPeak(arr) {

    let maxCount = 0; 

    for(let i = 0; i < arr.length - 1; i++) {
        let left = arr[i - 1];
        let right = arr[i + 1];
        let current = arr[i];

        if(current > left && current > right) {
            let count = 1;
            let currentLeft = current;
            let currentRight = current; 
            let left = i - 1; 
            let right = i + 1; 
            // console.log(current)

            while(arr[left] < currentLeft) {
                count++; 
                currentLeft = arr[left]; 
                left--
            }

            while(arr[right] < currentRight) {
                count++; 
                currentRight = arr[right]; 
                right++;
            }

            if(maxCount < count) maxCount = count; 
            // console.log(count, '---')
        }
    }

    return maxCount; 

}

console.log(highestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3])); 