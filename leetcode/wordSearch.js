var exist = function(board, word) {
    let strIdx = 0; 
	let firstChar = word[0]; 	
    let test = []

	for(let i = 0; i < board.length; i++) {
		for(let j = 0; j < board[i].length; j++) {
			let currentChar = board[i][j]
            let copyBoard = []; 

            for(let i = 0; i < board.length; i++) {
                let newArr = []; 
                for(let j = 0; j < board[i].length; j++) {
                    newArr.push(board[i][j]); 
                }
                copyBoard.push(newArr); 
            }

            // console.log('before', copyBoard)
			if(currentChar === firstChar) {
				checkChars(copyBoard, word, strIdx, i, j, test); 
			}		   
            // console.log('after', copyBoard)
		}
	}

    if(test.length > 0) return true; 

	return false
};

function checkChars(board, str, strIdx, i, j, test) {
	if(i < 0 || j < 0 || i >= board.length || j >= board[i].length || board[i][j] !== str[strIdx] || board[i][j] === "match") {
        return;
    }  

	if(str[strIdx] === board[i][j]) {
        board[i][j] = "match" 
    } 

    if(board[i][j] === "match" && strIdx >= str.length - 1) {
        test.push('got it')
    }

	checkChars(copyBoard(board), str, strIdx + 1, i + 1, j, test); 
	checkChars(copyBoard(board), str, strIdx + 1, i - 1, j, test); 
	checkChars(copyBoard(board), str, strIdx + 1, i, j - 1, test); 
	checkChars(copyBoard(board), str, strIdx + 1, i, j + 1, test); 
    // console.log(test);
}

function copyBoard(board) {
    let newBoard = []; 

    for(let i = 0; i < board.length; i++) {
        let copy = []; 
        for(let j = 0; j < board[i].length; j++) {
            copy.push(board[i][j])
        }
        newBoard.push(copy); 
    }

    return newBoard
}

board = [["A","B","C","E"],
         ["S","F","E","S"],
         ["A","D","E","E"]], word = "ABCESEEEFS"

console.log(exist(board, word)); 