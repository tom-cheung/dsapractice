// inputs are a string, and a maxWidth; 
// the goal is to justify the string according to the maxWidth 
// ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// The output should be an array 
/**
 * inputs are is an array of words and a maxWidth
 * the goal is to return a new array where the words are concatenated into a sentence
 * each sentence has to be up to maxWidth characters 
 * if the words within a sentence do not add up to maxWidth, pad the sentence with whitespaces  
 * the last sentence should only have whitespaces padded at the end. 
 * 
 */

function justify(word, maxWidth) {
  let charCount = 0; 
  let sent = [[]]; 

  for(let i = 0; i < word.length; i++) {
    charCount += word[i].length + 1;

    if(charCount - 1 <= maxWidth) {
      sent[sent.length - 1].push(word[i]);  
    } else {
      sent.push([word[i]]);
      charCount = word[i].length + 1; 
    }
  }

  // add the whitespaces
  for(let i = 0; i < sent.length; i++) {
    // get the current character count for each sentence 
    let count = 0; 
    for(let word of sent[i]) {
      count += word.length; 
    }

    count = maxWidth - count; 
    
    // iterate through each word of a sentence 
    // if the sentence isn't the last 
    if(i !== sent.length - 1 && sent[i].length > 1) {

      let end = sent[i].length - 1;
      let start = 0;   
      while(count) {
        sent[i][start % end] += " "; 
        start++; 
        count--; 
      }
      sent[i] = sent[i].join("");
      console.log(sent[i].length)

    } else {

      // issue is if the last sentence has more then one char you need to add in a space between the the chars. 
      // have conditionals here to check the length of 

      if(sent[i].length === 1) {
        let last = sent[i].length - 1;
        while(count) {
          sent[i][last] += " ";
          count--; 
        }
        sent[i] = sent[i].join(' ');
      } else {
        // check the remaining length, subtract the number of chars - 1 (avoiding last word)
        let wordCount = sent[i].length - 1; 
        count = count - wordCount; 
        let last = sent[i].length - 1; 
        while(count) {
          sent[i][last] += " ";
          count--;
        }
        sent[i] = sent[i].join(' ');
      }

      console.log(sent[i].length)
    }

  } 

  return sent; 
}

console.log(justify(["This", "is", "an", "example", "of", "text", "justification."], 16)); 
console.log(justify(["What","must","be","acknowledgment","shall","be"], 16));

let joinedString = ["This", "is", "an", "example", "of", "text", "justification."].join(" ");


function justify2(words, maxWidth) {
  let word = words.split(" ");

  let charCount = 0; 
  let sent = [[]]; 

  for(let i = 0; i < word.length; i++) {
    charCount += word[i].length + 1;

    if(charCount - 1 <= maxWidth) {
      sent[sent.length - 1].push(word[i]);  
    } else {
      sent.push([word[i]]);
      charCount = word[i].length + 1; 
    }
  }

  // add the whitespaces
  for(let i = 0; i < sent.length; i++) {
    // get the current character count for each sentence 
    let count = 0; 
    for(let word of sent[i]) {
      count += word.length; 
    }

    count = maxWidth - count; 
    
    // iterate through each word of a sentence 
    // if the sentence isn't the last 
    if(i !== sent.length - 1 && sent[i].length > 1) {

      let end = sent[i].length - 1;
      let start = 0;   
      while(count) {
        sent[i][start % end] += " "; 
        start++; 
        count--; 
      }
      sent[i] = sent[i].join("");
      console.log(sent[i].length)

    } else {

      // issue is if the last sentence has more then one char you need to add in a space between the the chars. 
      // have conditionals here to check the length of 

      if(sent[i].length === 1) {
        let last = sent[i].length - 1;
        while(count) {
          sent[i][last] += " ";
          count--; 
        }
        sent[i] = sent[i].join(' ');
      } else {
        // check the remaining length, subtract the number of chars - 1 (avoiding last word)
        let wordCount = sent[i].length - 1; 
        count = count - wordCount; 
        let last = sent[i].length - 1; 
        while(count) {
          sent[i][last] += " ";
          count--;
        }
        sent[i] = sent[i].join(' ');
      }

      console.log(sent[i].length)
    }

  } 

  return sent; 
}

console.log(justify2(joinedString, 16));