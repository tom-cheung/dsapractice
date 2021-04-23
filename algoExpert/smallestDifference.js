// O(nLogn) approach 
// sort the arrays 
// start with pointers on the left most elements, the smallest 
// whichever pointer points to the smaller element, you want to increment it, because that's the only way to bring the gap 


// in the below example, you'll hit 100 and 101. The only way to close the gap is to move the smaller number higher, not the higher number higher
// but if there's no other number after 100 then you have no where to go so you stop checking. 

// [1, 2, 100]
// [-100, 101, 200]

function smallestDifference(arrayOne, arrayTwo) {

    let sortedOne = arrayOne.sort((a,b) => a - b); 
    let sortedTwo = arrayTwo.sort((a,b) => a - b); 

    let topPointer = 0; // 3
    let bottomPointer = 0; // 2 

    let smallest = Infinity; // 2
    let pair = []; // 3, 5

    while(topPointer < arrayOne.length && bottomPointer < arrayTwo.length) {
        let numOne = sortedOne[topPointer]; // 3
        let numTwo = sortedTwo[bottomPointer]; // 5

        let diff = Math.abs(numOne - numTwo); // 2

        if(numOne < numTwo) {
            // let diff = Math.abs(numOne - numTwo); 
            topPointer++; 
        } else if(numTwo < numOne) {
            // let diff = Math.abs(numOne - numTwo); 
            bottomPointer++; 
        } else {
            return [numOne, numTwo];
        }

        if(smallest > diff) {
            smallest = diff; 
            pair = [numOne, numTwo]; 
        }
    }


    return pair; 

}

// [1, 2, 3]
// [-10, -15, 20]
