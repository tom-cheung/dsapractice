var numRescueBoats = function(weights, limit) {
	let sortedWeights = weights.sort((a, b) => a - b); // nLogn time 
	let boatCount = 0; 
	
	let left = 0; 
	let right = sortedWeights.length - 1; 

	while(left <= right) { // O(n)
		let combinedWeights = sortedWeights[left] + sortedWeights[right]; 
		
		if(combinedWeights <= limit) {
			boatCount++; 
			left++; 
			right--; 
		} else if(combinedWeights > limit) {
			boatCount++; 
			right--; 
		}

		if(left === right) {
            boatCount++; 
			break; 
         }		
	}

	return boatCount; 

    
};

// time complexity nLogn is the worse case 
// space complexity is constant 