const task = [
    ['4', '', '1', ''],
    ['', '2', '', ''],
    ['', '', '3', ''],
    ['', '', '2', '']
];

const task4 = [
	["", "", "9", "7", "4", "8", "", "", ""],
	["7", "", "", "", "", "", "", "", ""],
	["", "2", "", "1", "", "9", "", "", ""],
	["", "", "7", "", "", "", "2", "4", ""],
	["", "6", "4", "", "1", "", "5", "9", ""],
	["", "9", "8", "", "", "", "3", "", ""],
	["", "", "", "8", "", "3", "", "2", ""],
	["", "", "", "", "", "", "", "", "6"],
	["", "", "", "2", "7", "5", "9", "", ""]
];

const solveSudoku = function(board) {
    const size = board.length;
    const boxSize = Math.sqrt(board.length);

    const findEmpty = (board) => {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if(board[i][j] === '') {
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
            const currNum = i.toString();   
            const isValid = validate(currNum, currPos, board);

            if(isValid) {
                const [x,y] = currPos;
                board[x][y] = currNum;

                if(solve()) {
                    return true;
                }

                board[x][y] = '';
            }
        }

        return false;
    }

    solve();
    return board;
}

console.table(task4);
console.table(solveSudoku(task4));