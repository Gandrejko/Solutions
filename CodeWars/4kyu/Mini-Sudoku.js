function solve(board){
    const size = board.length;
    const boxSize = Math.sqrt(board.length);

    const findEmpty = (board) => {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if(board[i][j] === 0) {
                    return [i, j];
                }           
            }            
        }
        return null;
    }

    const validate = (num, pos, board) => {
        const [row, col] = pos;

        //Check rows
        for (let i = 0; i < size; i++) {
            if(board[i][col] === num && i !== row) {
                return false;
            }
        }

        //Check cols
        for (let i = 0; i < size; i++) {
            if(board[row][i] === num && i !== col) {
                return false;
            }
        }

        //CheckBox
        const boxRow = Math.floor(row / boxSize) * boxSize;
        const boxCol = Math.floor(col / boxSize) * boxSize;

        for (let i = boxRow; i < boxRow + boxSize; i++) {
            for (let j = boxCol; j < boxCol + boxSize; j++) {
                if(board[i][j] === num && i !== row && j !== col) {
                    return false;
                }
            }            
        }

        return true;
    }

    const solve = () => {
        const currPos = findEmpty(board);

        if(currPos === null) {
            return true;
        }

        for (let i = 1; i <= size; i++) {
            const currNum = i;   
            const isValid = validate(currNum, currPos, board);

            if(isValid) {
                const [x,y] = currPos;
                board[x][y] = currNum;

                if(solve()) {
                    return true;
                }

                board[x][y] = 0;
            }
        }

        return false;
    }

    solve();
    
    let isValid = true;
    for (let i = 0; i < board.length; i++) {
        const row = new Set();
        const col = new Set();
        for (let j = 0; j < board[i].length; j++) {
            if (!row.has(board[i][j])) row.add(board[i][j]);
            if (!col.has(board[j][i])) col.add(board[j][i]);
        }
        if (row.size !== 4 || col.size !== 4) isValid = false;
    }
    if(JSON.stringify(board).includes('0') || !isValid) return 'This sudoku is unsolvable!';

    return board;
}

console.log(solve([[2, 0, 0, 1],
                    [0, 0, 1, 0],
                    [0, 2, 0, 0],
                    [0, 0, 0, 4]]));
// console.log(solve([[0, 0, 2, 0],
//     [0, 3, 0, 4],
//     [3, 0, 4, 0],
//     [0, 2, 0, 0]]));
