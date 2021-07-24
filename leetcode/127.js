var ladderLength = function(beginWord, endWord, wordList) {
    let adjList = buildAdjList(beginWord, wordList); 
    
    let depth = 1; 
    let level = 1; 
    let queue = [beginWord];
    let visited = {}; 
    
    while(queue.length > 0) {
        while(level) {
            let current = queue.shift();
            visited[current] = true; 
            level--; 
            if(current === endWord) return depth;
            if(adjList[current]) {
                for(let word of adjList[current]) {
                    if(!visited[word]) queue.push(word); 
                }
            }
        }
        depth++; 
        level = queue.length; 
    }
    
    return 0; 
    
};

function buildAdjList(beginWord, wordList) {
    let newList = [beginWord, ...wordList];
    let adjList = {}; 
    
    for(let i = 0; i < newList.length; i++) {
        let begin = newList[i];
        for(let y = 0; y < newList.length; y++) {
            let current = newList[y]; 
            if(transformable(begin, current)) {
                if(adjList[begin]) {
                    adjList[begin].push(current);
                } else {
                    adjList[begin] = [current]
                }
            }
        }
    }
    
    return adjList; 
    
}

function transformable(beginWord, currentWord) {
    
    let count = 0; 
    for(let i = 0; i < beginWord.length; i++) {
        if(beginWord[i] === currentWord[i]) count++; 
    }
    
    return count === beginWord.length - 1; 
}

// inputs beginWord, endWord, wordList 
// beginWord = 'string', can be in wordList, but does not need to be 
// endWord = 'string', it is the last word in wordList  
// wordList = ['strings', 'strings']
// every adjacent pair of words differs by 1 char 

// ["hot","dot","dog","lot","log","cog"]
// beginWord = 'hit';
// endWord = 'cog'; 

// if endWord is not in wordList then there is no valid transformation sequence 
    // check if endWord == wordList[wordListlength - 1]; 
// find where hit is just 1 transformation from the adjacent words 
// could be before a word, could be after a word, or in between words 
// or it could not exist if the begin word can't tranform into any words in the wordList 

// have an array that stores sequences of words 
// check that beginWord can transform into it's adjacent neighors 
// from before wordList up to the last word 
// once you find a place it fits into then store the length of subsequent words to the end word + 1; 
    // wrong 

// ["hot","dot","dog","lot","log","cog"]

// {'hit' : 'hot'
//  'hot' : 'dot', 'lot'
//  'dot' : 'dog', 'lot'
//  'dog' : 'log', 'cog';
//  'lot' : 'log'
//  'log' : 'cog'
//   'cog': '' 
// }

// 5
// # words => 4
// [log, cog, log, cog]

// BFS approach 
// build an adjacency list 
// track the depth traversed
// track the number of words at each level 
// once you reach the endWord, return depth 
// other return 0 

// build adjacency list
// startWord, find all words that it can transform into 
// helper function to check that there is only 1 word difference 
console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log"]));