function validSolution(board) {
    let isValid = true;
    for (let i = 0; i < board.length; i++) {
        const row = new Set();
        const col = new Set();
        for (let j = 0; j < board[i].length; j++) {
            if (!row.has(board[i][j])) row.add(board[i][j]);
            if (!col.has(board[j][i])) col.add(board[j][i]);
        }
        if (row.size !== 9 || col.size !== 9) isValid = false;
    }


    for (let k = 0; k < 9; k += 3) {
        for (let l = 0; l < 9; l += 3) {
            const area = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (!area.has(board[i + k][j + l])) area.add(board[i + k][j + l]);
                }
            }
            if (area.size !== 9) isValid = false;
        }
    }


    return isValid;
}

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
]));