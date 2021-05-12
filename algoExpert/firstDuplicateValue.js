function firstDuplicateValue(array) {

	let trackValue = new Map(); 

	for(let val of array) {
		
		if(!trackValue.has(val)) {
			trackValue.set(val);
		} else {
			return val; 
		}
	}
	
	
	return -1; 
}
