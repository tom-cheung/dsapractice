

// 2, 3, 5, 5, 9 
// 2, 1, 3, 6, 7

// 2, 3, 5, 6, 9 => 25
// 2, 3, 5, 6, 9


// by pairing up the largest with the largest, you lessen the impact of some of the largest numbers 

// 2, 3, 5, 5, 9 
// 7, 6, 3, 2, 1

// 7 / 6/ 5/ 5/ 9 => 32 




// you want to pair each red with blue so that either you get the max value or the min value 

// max value, sorted and reverse so that max values are at either ends 
// sort the values first 
// if fastest is you you do x if not do y 


// [2, 3, 9] 
// [1, 4, 7] 
// false 

function tandemBicycle(red, blue, fastest) {

    // O(nLogn)  
	let sortedRed = red.sort((a,b) => a - b); 
	let sortedBlue = blue.sort((a,b) => a - b); 
	let speed = 0; // 2 + 4 + 9 => 15

	if(fastest) {
		for(let i = 0, y = sortedBlue.length - 1; i < sortedRed.length; i++, y--) {
			let redSpeed = sortedRed[i]; // 2
			let blueSpeed = sortedBlue[y] // 7 
			if(redSpeed >= blueSpeed) { 
				speed += redSpeed;
			} else {
				speed += blueSpeed; 
			}
		}			
	} else {

		for(let i = 0; i < sortedRed.length; i++) {
			let redSpeed = sortedRed[i]; 
			let blueSpeed = sortedBlue[y]; 
			if(redSpeed >= blueSpeed) {
				speed += redSpeed; 
			} else {
				speed += blueSpeed; 
			}		
	
		}
	}

	speed; 

}