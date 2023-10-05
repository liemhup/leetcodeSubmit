const solveQueens = (n) => {  
  const board = Array.from({length: n}, () => Array(n).fill('.'));
  const solution = [];
  const isSafe = (row, col) => {
    // check xem co queen nao cung cot khong
    for (i = 0; i <row; i++) {
      if (board[i][col] === 'q') return false;
    }
    // check if upper-left diagonal has a queen
    for (i = row-1, j = col-1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'q') return false;
    }
    // check if upper-right diagonal has a queen
    for (i = row-1, j = col+1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'q') return false;
    }    
    return true;
    
  };
  
  
  const backTracking = (i) => {
    console.log('row', i)
    if (i===n) {
      solution.push(board.map(row=>row.join('')))
      return
    }
    for (let j=0; j<n ; j++) {      
      if (isSafe(i,j)) {  
        // console.log(i,j, true)      
        board[i][j] = 'q'        
        // console.log(board)              
        backTracking(i+1)
        // remove the queen if it doesn't lead to a solution
        board[i][j] = '.'
      } 
    }
  }
  backTracking(0)
  // console.log('solution',solution)
  return solution  
};

solveQueens(4)


