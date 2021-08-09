/**
 * 
 * input, is a string containing words seperated by spaces, at least 1 space could be more 
 * the goal is to distribute the empty spaces evenly between the words, with any extra spaces being added to the end of the sentence 
 * 
 * '  walks  udp package   into  bar a'
 * 
 * 11 spaces 
 * 6 words 
 * 
 * 11/5 = 2 
 * 5 * 2 = 10 => 11 - 10 = 1
 * 'walks  udp  package  into  bar  a '
 * 
 * count the number of spaces, record that number  
 * split the string into an array of words, .split(" ")
 * 
 * divide the count of spaces by the number of words - 1, round down to the nearest whole number 
 * 
 * obtain the remaining count of spaces after dividing it by the number of words - 1
 * 
 * add the evenly divided spaces to each word except the last 
 * 
 * add the remaining spaces to the last word 
 * 
 * join the words by an empty space 
 * 
 * 
 * 
 */

function reorderSpaces(text) {
    let spaceCount = 0; 

    for(let char of text) {
        if(char === " ") spaceCount++; 
    }; 

    let words = []
    
    text.split(" ").forEach(word => {
        if(word !== "") words.push(word);
    })


    if(words.length === 1) {
        for(let i = 0; i < spaceCount; i++) words[0] += " ";
        return words.join("")
    }

    let spaceBetween = Math.floor(spaceCount / (words.length - 1));
    let spaceRemaining = spaceCount - (spaceBetween * (words.length - 1))

    for(let i = 0; i < words.length; i++) {
        if(i < words.length - 1) {
            for(let y = 0; y < spaceBetween; y++) words[i] += " "; 
        } else {
            for(let z = 0; z < spaceRemaining; z++) words[i] += " "
        }
    }

    
    console.log(spaceCount);
    console.log(spaceBetween);
    console.log(spaceRemaining)

    return words.join(""); 
}

// console.log(reorderSpaces(" practice   makes   perfect"));
console.log(reorderSpaces("  hello")); 