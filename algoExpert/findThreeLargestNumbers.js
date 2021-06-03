function findThreeLargestNumbers(arr) {
	
	let largest = -Infinity; // 
	let largestIdx = 0; 
	let idx = 0; 
	let sorted = []; // [3]

	while(sorted.length < 3) { 
		
		while(idx < arr.length) {
			if(arr[idx] !== undefined && arr[idx] > largest) { // undefined > 1 = false 
				largest = arr[idx]; // 2
				largestIdx = idx;   // 1 
			}
			idx++;  // 3
		}

		sorted.unshift(largest); 
		arr[largestIdx] = undefined; 
		largest = -Infinity; 
		largestIdx = 0; 
		idx = 0; 

	}

	return sorted; 
}


function findThreeLargestNumbers2(arr) {

    const largest = [null, null, null]; 

    for(const num of arr) {

        if(largest[2] === null || largest[2] <= num) {
            updateValue(largest, num, 2)
        } else if(largest[1] === null || largest[1] <= num) {
            updateValue(largest, num, 1)
        } else if(largest[0] === null || largest[0] <= num) {
            updateValue(largest, num, 0)
        }
    }

    return largest; 
}

function updateValue(arr, num, idx) {
    for(let i = 0; i <= idx; i++) {
        if(i === idx) {
            arr[i] = num; 
        } else {
            arr[i] = arr[i + 1]
        }
    }
}

console.log(findThreeLargestNumbers2([5,1,3,87,2,55,9320])); 