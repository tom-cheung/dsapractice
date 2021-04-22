var fourSum = function(nums, target) {
    	
    let set = []; 
    let track = {}; 
	
	let sorted = nums.sort((a,b) => a - b); 
	
	for(let i = 0; i < sorted.length - 3; i++) {
		let outerRight = sorted.length - 1; 
		
		while(outerRight > i + 2 ) {
			
			let innerLeft = i + 1; 
			let innerRight = outerRight - 1; 
			
			while(innerRight > innerLeft) {
				
				let sum = sorted[i] + sorted[innerLeft] + sorted[innerRight] + sorted[outerRight]; 
				
				if(sum === target) {
					let combo = [sorted[i], sorted[innerLeft], sorted[innerRight], sorted[outerRight]]; 
                    
                    
                    if(track[combo] === undefined) {
                        set.push([sorted[i], sorted[innerLeft], sorted[innerRight], sorted[outerRight]])    
                        track[combo] = true; 
                    }
                    
					innerLeft++; 
					innerRight--; 
				} else if(sum < target) {
					innerLeft++; 
				} else if (sum > target) {
					innerRight--; 
				}
				
			}
			
			outerRight--; 
		}
		
	}
	
	return set; 
};

console.log(fourSum([2,2,2,2,2], 8)); 