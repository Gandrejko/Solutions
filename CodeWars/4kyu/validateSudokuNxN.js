// function validSolution(board) {
//     let isValid = true;
//     for (let i = 0; i < board.length; i++) {
//         const row = new Set();
//         const col = new Set();
//         for (let j = 0; j < board[i].length; j++) {
//             if(!row.has(board[i][j])) row.add(board[i][j]);
//             if(!col.has(board[j][i])) row.add(board[j][i]);
//         }
//         if(row.size !== board.length || col.size !== board.length) isValid = false;
//     }

//     for (let i = 0; i < board.length; i++) {
//         const row = new Set();
//         const col = new Set();
//         for (let j = 0; j < board[i].length; j++) {
//             if (!row.has(board[i][j])) row.add(board[i][j]);
//             if (!col.has(board[j][i])) col.add(board[j][i]);
//         }
//         if (row.size !== board.length || col.size !== board.length) isValid = false;
//     }


//     for (let k = 0; k < board.length; k += Math.sqrt(board.length)) {
//         for (let l = 0; l < board.length; l += Math.sqrt(board.length)) {
//             const area = new Set();
//             for (let i = 0; i < Math.sqrt(board.length); i++) {
//                 for (let j = 0; j < Math.sqrt(board.length); j++) {
//                     if (!area.has(board[i + k][j + l])) area.add(board[i + k][j + l]);
//                 }
//             }
//             if (area.size !== board.length) isValid = false;
//         }
//     }


//     return isValid;
// }



  var Sudoku = function(data) {
  return {
    isValid: function() {
        let isValid = true;    

        data.forEach(element => {
          if(element.length !== data.length) isValid = false;
          return isValid;
        });

        data.forEach(element => {
          if(element.length === 0) isValid = true;
          return isValid;
        });

        if(!isValid) return false;
        for (let i = 0; i < data.length; i++) {
            const row = new Set();
            const col = new Set();
            for (let j = 0; j < data[i].length; j++) {
                if (!row.has(data[i][j])) row.add(data[i][j]);
                if (!col.has(data[j][i])) col.add(data[j][i]);
                if(data[i][j] > data.length) isValid = false;
            }
            if (row.size !== data.length || col.size !== data.length) isValid = false;
        }
    
    
        for (let k = 0; k < data.length; k += Math.sqrt(data.length)) {
            for (let l = 0; l < data.length; l += Math.sqrt(data.length)) {
                const area = new Set();
                for (let i = 0; i < Math.sqrt(data.length); i++) {
                    for (let j = 0; j < Math.sqrt(data.length); j++) {
                        if (!area.has(data[i + k][j + l])) area.add(data[i + k][j + l]);
                    }
                }
                if (area.size !== data.length) isValid = false;
            }
        }
    
        return isValid;
    }
  };
};

var goodSudoku1 = new Sudoku([
    [7,8,4, 1,5,9, 3,2,6],
    [5,3,9, 6,7,2, 8,4,1],
    [6,1,2, 4,3,8, 7,5,9],
  
    [9,2,8, 7,1,5, 4,6,3],
    [3,5,7, 8,4,6, 1,9,2],
    [4,6,1, 9,2,3, 5,8,7],
    
    [8,7,6, 3,9,4, 2,1,5],
    [2,4,3, 5,6,1, 9,7,8],
    [1,9,5, 2,8,7, 6,3,4]
  ]);

  var goodSudoku2 = new Sudoku([
    [1,4, 2,3],
    [3,2, 4,1],
  
    [4,1, 3,2],
    [2,3, 1,4]
  ]);

  var badSudoku1 = new Sudoku([
    [1,2,3, 4,5,6, 7,8,9],
    [1,2,3, 4,5,6, 7,8,9],
    [1,2,3, 4,5,6, 7,8,9],
    
    [1,2,3, 4,5,6, 7,8,9],
    [1,2,3, 4,5,6, 7,8,9],
    [1,2,3, 4,5,6, 7,8,9],
    
    [1,2,3, 4,5,6, 7,8,9],
    [1,2,3, 4,5,6, 7,8,9],
    [1,2,3, 4,5,6, 7,8,9]
  ]);

  var badSudoku2 = new Sudoku([
    [1,2,3,4,5],
    [1,2,3,4],
    [1,2,3,4],  
    [1]
  ]);
  var badSudoku3 = new Sudoku([ 
    []
  ]);

  console.log(badSudoku3.isValid());