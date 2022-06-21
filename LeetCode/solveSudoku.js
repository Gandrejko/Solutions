var solveSudoku = function(board) {
    const rowMain = [];
    const colMain = [];
    const areaMain = [];
    
    for (let i = 0; i < board.length; i++) {  
        const row = [];
        const col = [];
        for (let j = 0; j < board[i].length; j++) {
            row.push(board[i][j]);
            col.push(board[j][i]);
            if((i - 1) % 3 === 0 && (j - 1) % 3 === 0) {
                const area = [];
                for (let k = 0; k < 3; k++) {
                    for (let l = 0; l < 3; l++) {
                        area.push(board[i-1+k][j-1+l]);                       
                    }                
                }
                areaMain.push(area);
            }
        }
        rowMain.push(row);
        colMain.push(col);
    }
    
    
    // console.log(areaMain);
    // console.log(rowMain);
    // console.log(colMain);


    let k = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            
            // console.log(rowMain[i][j], colMain[j][i]);
            // console.log('=============');

            if(rowMain[i][j] === '.'){
                console.log(rowMain[i].includes('5'));
                ++k;
            }
        }        
    }
    console.log("k", k);

    function isInclude(index, arr) {
        for (index = 0; index < arr.length; index++) {
            
        }
    }



};




solveSudoku([   ["5","3",".",".","7",".",".",".","."],
                ["6",".",".","1","9","5",".",".","."],
                [".","9","8",".",".",".",".","6","."],
                ["8",".",".",".","6",".",".",".","3"],
                ["4",".",".","8",".","3",".",".","1"],
                ["7",".",".",".","2",".",".",".","6"],
                [".","6",".",".",".",".","2","8","."],
                [".",".",".","4","1","9",".",".","5"],
                [".",".",".",".","8",".",".","7","9"]]);