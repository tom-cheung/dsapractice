
function diskSpaceAnalysis(space, segment) {
	
    // time O(1)
	let start = 0; // 2 
	let end = segment - 1; // 3 
	let largest = 0; // 4


	while(end < space.length) { // 2 < 4 
		let smallest = Infinity;  // 4
		for(let i = start; i <= end; i++) {  // 3 / 3 
			let currentSpace = space[i]; // 6 
			if(currentSpace < smallest) smallest = space[i] // 4
		}
		if(smallest > largest) largest = smallest; // 4
		start++; 
		end++; 
	}

	return largest // 4 
}

let disk = [8, 2, 4, 6, 10, 2, 1, 100, 99]; 

console.log(diskSpaceAnalysis(disk, 1));