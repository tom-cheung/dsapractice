var ladderLength = function(beginWord, endWord, wordList) {
    let adjList = {}; 
    
    wordList.unshift(beginWord); 
    
    let newList = wordList; 

    console.log(newList);
    
    // build a adjList 
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

    console.log(adjList);
    
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

function transformable(beginWord, currentWord) {
    
    let count = 0; 
    for(let i = 0; i < beginWord.length; i++) {
        if(beginWord[i] === currentWord[i]) count++; 
    }
    
    return count === beginWord.length - 1; 
}

console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log"]));