const quickSort = (array) => {
	if(array.length <= 1) return array;

    let pivot = array[Math.floor(array.length/2)]; 

    let smaller = []; 
    let larger = []; 

    for(let num of array) {
        if(num < pivot) {
            smaller.push(num)
        } else if(num >= pivot) {
            larger.push(num)
        }
    }

    let sortedSmaller = quickSort(smaller);
    let sortedLarger = quickSort(larger);

    return sortedSmaller.concat(pivot, sortedLarger); 

}

console.log(quickSort([100, 25]));