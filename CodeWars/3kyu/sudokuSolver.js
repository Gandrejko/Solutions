function sudoku(puzzle) {
    const size = puzzle.length;
    const boxSize = Math.sqrt(puzzle.length);

    const findEmpty = (puzzle) => {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if(puzzle[i][j] === 0) {
                    return [i, j];
                }           
            }            
        }
        return null;
    }

    const validate = (num, pos, puzzle) => {
        const [row, col] = pos;

        //Check rows
        for (let i = 0; i < size; i++) {
            if(puzzle[i][col] === num && i !== row) {
                return false;
            }
        }

        //Check cols
        for (let i = 0; i < size; i++) {
            if(puzzle[row][i] === num && i !== col) {
                return false;
            }
        }

        //CheckBox
        const boxRow = Math.floor(row / boxSize) * boxSize;
        const boxCol = Math.floor(col / boxSize) * boxSize;

        for (let i = boxRow; i < boxRow + boxSize; i++) {
            for (let j = boxCol; j < boxCol + boxSize; j++) {
                if(puzzle[i][j] === num && i !== row && j !== col) {
                    return false;
                }
            }            
        }

        return true;
    }

    const solve = () => {
        const currPos = findEmpty(puzzle);

        if(currPos === null) {
            return true;
        }

        for (let i = 1; i <= size; i++) {
            const currNum = i;   
            const isValid = validate(currNum, currPos, puzzle);

            if(isValid) {
                const [x,y] = currPos;
                puzzle[x][y] = currNum;

                if(solve()) {
                    return true;
                }

                puzzle[x][y] = 0;
            }
        }

        return false;
    }

    solve();
    return puzzle;
}

var puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];

console.log(sudoku(puzzle));