const fullJustify = (words, maxWidth) => {
    const n = words.length;
    const res = [];
  
    console.log(n);
    console.log(n / maxWidth)

    for (var i = 0; i < n; i = j) {
      // Step 1. Use j to find out where to cut the row (i ... j-1)
      let len = -1;

      for (var j = i; j < n && len + 1 + words[j].length <= maxWidth; j++) {
        len += 1 + words[j].length;
      }
  
      // Step 2. Calculate how many spaces to add for each word
      let spaces = 1; // avg. spaces reserved for each word
      let extra = 0; // extra left spaces
  
      if (j !== i + 1 && j !== n) {
        spaces = (maxWidth - len) / (j - 1 - i) + 1;
        extra = (maxWidth - len) % (j - 1 - i);
      }
  
      // Step 3. Build the row with spaces + extra space + word
      let row = words[i];
      for (let k = i + 1; k < j; k++, extra--) {
        row += ' '.repeat(spaces + (extra > 0 ? 1 : 0)) + words[k];
      }
      row += ' '.repeat(maxWidth - row.length);
  
      // Step 4. Push the row to final result
      res.push(row);
    }
  
    return res;
  };

//   console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16))

  // maxwidth per each row 
  // go through each word
  // keep a counter of the max width 
  // push each word into a array if the number of characters doesn't exceed the remaining max width count 
  // if it does exceed, add it in as a new subarray 

  // to pad the spaces, revisit each subarray
  // with another counter tracking the remaining spaces of maxwidth, from each word in the subarray add in a space until the counter is done
  // move until you hit the last subarray, add all spaces to the end of 

  function fun(words, maxWidth) {

    let sent = [[]]; 
    let count = maxWidth;
    for(let word of words) {
        if(word.length + sent[sent.length - 1].length < count) {
            sent[sent.length - 1].push(word)
            count -= word.length;
        } else {
            // sent[sent.length - 1][sent[sent.length - 1].length - 1 ] = sent[sent.length - 1][sent[sent.length - 1].length - 1 ].split(' ').join('');
            count = maxWidth - word.length; 
            sent.push([word])
        }
    }

    console.log(sent);

    for(let i = 0; i < sent.length; i++) {
        let spaces = maxWidth - sent[i].join("").length; 
        let j = 0; 

        if(i === sent.length - 1) {
            sent[i] = [sent[i].join(" ")]; 

            spaces -= sent[i].length - 1; 
            while(spaces > 0 ) { 
                sent[i][0] += " "
                spaces--; 
            }
            // sent[i].join("")
        } else if(sent[i].length === 1) {
            while(spaces > 0) {
                sent[i][j % (sent[i].length - 1)] += " "
                j++; 
                spaces--; 
            }
        } else {
            while(spaces > 0) {
                sent[i][j % (sent[i].length - 1)] += " "
                j++; 
                spaces--; 
            }
            sent[i] = [sent[i].join("")];
        }
    }

    return sent.join(',').split(','); 
  }

//   console.log(fun(["This", "is", "an", "example", "of", "text", "justification."], 16))
//   console.log(fun(["What","must","be","acknowledgment","shall","be"]), 16)