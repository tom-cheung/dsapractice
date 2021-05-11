let test = [ ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'] ];

function letterCombinations(digits) {

    let dial = {
        2: ['a', 'b', 'c'], 
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'], 
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }

    let numbers = []; 

    for(let digit of digits) {
        numbers.push(dial[digit]);
    }

    return createCombinations(numbers, 0);

}



function createCombinations(input, idx, arr=[], prevStr="") {

    if(idx === input.length - 1) {
        for(let char of input[idx]) {
            let newStr = prevStr + char; 
            arr.push(newStr)
        }
        return arr; 
    }

    for(let char of input[idx]) {
        let newStr = prevStr + char; 
        createCombinations(input, idx + 1, arr, newStr); 
    }

    return arr;
}

// console.log(createCombinations(test, 0));

console.log(letterCombinations("2"))