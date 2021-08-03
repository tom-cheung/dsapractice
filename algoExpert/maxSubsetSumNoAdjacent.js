/**
 * 
 * pattern... 
 * 
 * [7, 10, 12, 7, 9, 14]
 * 
 * first find the max sum given each element 
 * 
 * first sum will be the first number, nothing to add to it 
 * second sum will be either the second number, or the first number, whichever is greater 
 * [7, 10]
 * 
 * subsequent sums can follow this logic 
 * 
 * max(maxSum at idx - 1, or maxSum at idx - 2 + current number)
 * 
 * the reasoning behind this is 
 * 
 * [7, 10]
 * 
 * with the understanding that 7 is the max sum at idx 0 and 10 is the max sum at idx 1 
 * 
 * you can add 12 to 7 to get 19 
 * 
 * or you can accept that 10 is the largest sum 
 * 
 * 19 is greatest so it get's added in, WHICH MEANS 10 is excluded from the current max sum, 
 *  
 * [7, 10, 19]
 * 
 * next number is 7
 * 
 * can't add 7 to 19, because that would be adding adjacent numbers, 
 * 
 * but can add 7 to 10, which excludes the first 7 and the 12, and their sums 
 * 
 * 19 is equal to the previous max sum of 19 so that's the current maxSum; 
 * 
 * [7, 10, 19, 19]
 * 
 * next number is 9, 
 * 
 * max(19, 19 + 9 = 28)
 * 
 * [7, 10, 19, 19, 28]
 * 
 * next number is 14
 * 
 * max(28, 33)
 * 
 * [7, 10, 19, 19, 28, 33]
 * 
 * at any point you are not considering if the previous max sum is the greatest
 * or if adding the current number to the max sum excluding previous number is greater 
 * by build it up in this manner you account for excluding adjacent numbers 
 * 
 * it's like you have to trust that the previous solution you built is right.. 
 *
 */


function maxSubsetSumNoAdjacent(array) {
    if(array.length < 1) return 0; 
    let maxSum = [];
    for(let i = 0; i < array.length; i++) {
        if(i === 0) {
            maxSum.push(array[i]);
        } else if(i === 1) {
            maxSum.push(Math.max(array[i], array[i - 1]));
        } else {
            maxSum.push(Math.max(maxSum[i - 1], maxSum[i - 2] + array[i])); 
        }
    }

    return maxSum[maxSum.length - 1];
}