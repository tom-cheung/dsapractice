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
