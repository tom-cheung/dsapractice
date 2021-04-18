function countSort(array) {

    let sorted = []; // O(1)

    for(let num of array) { // O(n)
        if(sorted[num] === undefined) {
            sorted[num] = 1; 
        } else {
            sorted[num] += 1; 
        }
    }

    let i = 0; 

    for(let y = 0; y < sorted.length; y++) {
        let freq = sorted[y];

        if(freq !== undefined) {
       
            while(freq > 0) {
                array[i] = y; 
                i++; 
                freq--; 
            }
        }

    }

    return array; 
}

console.log(countSort([2, 1, 1, 4]));


function minimumWaitingTime2(queries) {
    // Write your code here.
    return 0;
  }
  // [1 ,2, 3]
  // waitTime = 0
  // duration = 3 => current element 
  // queriesLeft = 3 - 3 = 0  => number of elements left 
  // newWaitTime = 4 => current element + number of elements left => i suppose the logic is you have to at least repeat the current query a certain number of times. 


  //my solution

  function minWaitTime(queries) {

    // sort the array because to get the minimum query time, you likely should start by adding the minimum values and dropping the largest
    // [1, 2, 3] v [2, 1, 3] v [3, 2, 1]
    queries = queries.sort((a,b) => a - b); 

    // total tracks all the query times up until the last element runs 
    let total = 0; 

    // running total is the total query time from the first query to the current, which gets updated and added into total each time you iterate 
    // running total grows as you execute a new program/ hit a new query time 
    let runningTotal = 0; 

    for(let i = 0; i < queries.length; i++) {
        // just to easily access the current element; 
        let query = queries[i];

        // updating total to include running total; 
        total += runningTotal; 

        // updating running total
        runningTotal += query; 
    }
    return total; 
  }
  