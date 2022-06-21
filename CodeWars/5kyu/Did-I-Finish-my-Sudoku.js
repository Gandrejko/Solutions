function doneOrNot(board){
    for (let i = 0; i < board.length; i++) {
      const row = new Set();
      const col = new Set();
      for (let j = 0; j < board[i].length; j++) {
        if(!row.has(board[i][j])) {row.add(board[i][j]);}
        if(!col.has(board[j][i])) {col.add(board[j][i]);}
      }
      if(row.size < 9) {return "Try again!";}
      if(col.size < 9) {return "Try again!";}
    }
    for (let k = 0; k < 9; k += 3) {
      for (let l = 0; l < 9; l += 3) {
        const area = new Set();
        for (let i = 0; i < 3; i++) { 
          for (let j = 0; j < 3; j++) {   
            if(!area.has(board[i+k][j+l])) {area.add(board[i+k][j+l]);} 
          } 
        }
        if(area.size < 9) {return "Try again!";}  
      } 
    }
    return "Finished!";
}