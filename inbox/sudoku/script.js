// 1. homogenous array (use -1 instead of '')
// 2. naming
// 3. use numbers everywhere

// 81 * 81 * 27
let DEBUG = false;

const defaultTask = [
	["", "", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", "", ""],
	["", "", "", "", "", "", "", "", ""]
];

const task1 = [
	["", "4", "", "1", "3", "8", "9", "5", "7"],
	["7", "3", "1", "", "9", "5", "6", "", "8"],
	["8", "", "", "7", "", "4", "", "1", "2"],
	["2", "5", "", "", "4", "", "8", "7", ""],
	["4", "1", "9", "8", "", "7", "", "", "6"],
	["3", "", "7", "5", "1", "6", "4", "", "9"],
	["9", "", "", "4", "7", "", "", "6", "5"],
	["5", "7", "3", "6", "", "", "2", "9", ""],
	["", "6", "4", "9", "5", "2", "7", "8", ""],
];

const task2 = [
	["", "5", "", "1", "", "", "", "", "8"],
	["2", "3", "", "6", "7", "", "", "", "5"],
	["", "4", "1", "", "", "3", "7", "6", ""],
	["", "", "7", "", "", "9", "", "", "1"],
	["5", "1", "8", "3", "", "", "", "9", ""],
	["", "9", "", "7", "1", "", "5", "8", ""],
	["3", "", "", "", "", "1", "", "5", ""],
	["", "", "5", "", "", "7", "8", "", "2"],
	["1", "", "", "9", "6", "", "4", "", ""],
];

const task3 = [
	["5", "3", "", "", "7", "", "", "", ""],
	["6", "", "", "1", "9", "5", "", "", ""],
	["", "9", "8", "", "", "", "", "6", ""],
	["8", "", "", "", "6", "", "", "", "3"],
	["4", "", "", "8", "", "3", "", "", "1"],
	["7", "", "", "", "2", "", "", "", "6"],
	["", "6", "", "", "", "", "2", "8", ""],
	["", "", "", "4", "1", "9", "", "", "5"],
	["", "", "", "", "8", "", "", "7", "9"],
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

const task5 = [
	["5", "", "", "", "3", "", "", "", ""],
	["", "", "", "", "", "", "", "4", "1"],
	["", "", "", "1", "", "4", "7", "", ""],
	["", "", "", "", "", "", "", "", ""],
	["6", "", "", "", "", "", "5", "", ""],
	["", "", "", "8", "", "", "", "", ""],
	["", "8", "", "2", "", "7", "", "", ""],
	["", "", "", "", "6", "", "3", "9", ""],
	["", "1", "", "", "", "", "", "", ""]
];

const task6 = [
	["9", "", "", "5", "", "8", "", "4", ""],
	["", "", "", "", "", "", "", "", ""],
	["6", "4", "", "", "9", "7", "", "", "5"],
	["8", "", "6", "4", "", "", "5", "9", ""],
	["", "", "", "", "", "", "", "", ""],
	["7", "", "", "", "", "", "", "6", "4"],
	["", "6", "5", "", "4", "2", "7", "3", ""],
	["", "", "9", "", "7", "", "", "5", "6"],
	["", "8", "", "6", "", "5", "4", "", ""]
];

const task7 = [
	["", "", "5", "", "", "", "", "", ""],
	["", "7", "", "9", "", "", "", "6", ""],
	["9", "", "2", "", "1", "", "", "7", ""],
	["5", "", "", "6", "", "2", "4", "", ""],
	["", "4", "", "", "3", "", "", "", "2"],
	["", "2", "", "", "", "", "3", "1", ""],
	["", "9", "6", "1", "", "", "", "", ""],
	["2", "", "", "", "9", "", "", "", ""],
	["", "", "3", "2", "", "4", "6", "", "1"]
];

const task8 = [
	["", "9", "4", "", "", "", "5", "", "7"],
	["", "7", "", "", "8", "", "", "", ""],
	["", "", "6", "", "", "4", "1", "2", ""],
	["", "", "1", "", "", "", "", "", "2"],
	["", "", "", "8", "6", "", "9", "7", ""],
	["", "6", "", "2", "", "7", "", "", ""],
	["2", "3", "", "4", "1", "8", "7", "", "6"],
	["6", "4", "", "7", "", "5", "3", "1", "9"],
	["5", "1", "", "", "9", "", "", "", ""]
];

const task9 = [
	["", "7", "", "9", "", "1", "", "", ""],
	["", "", "9", "", "", "", "", "", ""],
	["", "", "1", "", "", "4", "", "", "2"],
	["5", "", "", "", "", "", "7", "", ""],
	["7", "", "8", "", "", "", "2", "", ""],
	["", "", "", "", "", "", "1", "9", "4"],
	["", "", "", "7", "", "", "", "", "6"],
	["", "", "", "", "2", "", "", "4", ""],
	["3", "6", "", "", "8", "", "", "", ""]
];

const task10 = [
	["9", "", "", "", "", "5", "1", "", ""],
	["", "", "5", "4", "", "", "8", "", ""],
	["", "4", "7", "", "", "", "", "", ""],
	["8", "", "", "", "", "3", "", "", "6"],
	["7", "6", "", "9", "", "", "", "", "2"],
	["", "", "", "", "", "4", "", "", "7"],
	["", "", "", "", "", "", "", "", ""],
	["6", "", "", "", "", "9", "3", "", ""],
	["5", "", "", "", "2", "", "", "", "8"]
];

function getCol(posCol, board) {
	const col = [];
	for(let i=0; i< board.length; i++){
		col.push(board[i][posCol]);
	}
	return col;
}

function fillSquare(board, startI, startJ) {
	const area = [];
	for (let k = 0; k < 3; k++) {
		const areaRow = [];
		for (let l = 0; l < 3; l++) {
			areaRow.push(board[startI + k][startJ + l]);
		}
		area.push(...areaRow);
	}
	return area;
}

// rename
function fillArrayGeneric(posRow, posCol, board, callback) {
	const row = board[posRow]; //Get row from board
	const col = getCol(posCol, board); //Get column from board
	const area = fillSquare(board, Math.floor(posRow / 3) * 3, Math.floor(posCol / 3) * 3); //Get area from board

	row
	.concat(col)
	.concat(area)
	.forEach(callback);
} 

function getPossibleValues(posRow, posCol, board) {
	const num = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
	fillArrayGeneric(posRow, posCol, board, (e) => num.delete(e))

	return [...num]
} 

function getImpossibleValues(posRow, posCol, board) {
	const numDiff = new Set();
	fillArrayGeneric(posRow, posCol, board, (e) => numDiff.add(e))
	
	return [...numDiff]
} 

function findValueByExclusionInRow(posRow, board) {
	const row = board[posRow];
	const resRow = [];
	let result = 0;
	let index = -1;

	for (let i = 0; i < row.length; i++) {
		const posAndImpossibleValues = [i, []];
		if(row[i] === '') {
			posAndImpossibleValues[1] = getImpossibleValues(posRow, i, board).filter(Boolean);
		} else{
			posAndImpossibleValues[1] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
		}
		resRow.push(posAndImpossibleValues);
	}

	for (let i = 1; i < resRow.length + 1; i++) {
		const arr = [];
		for (let j = 0; j < 9; j++) {
			if(!resRow[j][1].includes((i).toString())) arr.push(j);		
		}
		if(arr.length === 1) {
			result = i.toString();	
			index = arr[0];		
		}
	}

	return [result, index];
}

function findValueByExclusionInCol(posCol, board) {
	const col = getCol(posCol, board);
	const resCol = [];
	let result = 0;
	let index = -1;

	for (let i = 0; i < col.length; i++) {
		const element = [i];
		if(col[i] === '') {
			element[1] = getImpossibleValues(i, posCol, board).filter(Boolean);
		} else{
			element[1] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
		}
		resCol.push(element);
	}

	for (let i = 1; i < resCol.length + 1; i++) {
		const arr = [];
		for (let j = 0; j < 9; j++) {
			if(!resCol[j][1].includes((i).toString())) arr.push(j);		
		}
		if(arr.length === 1) {
			result = i.toString();	
			index = arr[0];		
		}
	}

	return [result, index];
}

function sudokuSolver(board) {
	let isChange = false;
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			const res = getPossibleValues(i, j, board);
			if (board[i][j] === "" && res.length === 1) {
				board[i][j] = res[0];
				isChange = true;
			}
			if(i === 8) {
				const [value, indexInRow] = findValueByExclusionInCol(j, board);
				if(indexInRow !== 0) {
					board[indexInRow][j] = value;
					isChange = true;
				}
			}			
		}
		const [value, indexInRow] = findValueByExclusionInRow(i, board);
		
		if(indexInRow !== -1) {
			board[i][indexInRow] = value;
			isChange = true;
		}		
	}

	if(isChange && board.flat().includes('')) {
		sudokuSolver(board);
	} 
	else if(!isChange) {
		solveRecursion(board);
	}
}


// ================================

// Recursion

const solveRecursion = function(board) {
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



// ================================

// UI


function getTask(task) {
	const items = document.querySelectorAll(".item");

	let arr = task.flat();

	for (let i = 0; i < items.length; i++) {
		items[i].innerHTML = `<div class="solution">${arr[i]}</div>`;
		if(arr[i] === '') items[i].classList.add('empty');
	}
}

function getUselessNumbers(task) {
	const result = [];
	for (let i = 0; i < task.length; i++) {
		for (let j = 0; j < task[i].length; j++) {
			if(task[i][j] === '') {
				result.push(getPossibleValues(i, j, task).filter(x => x != ''));
			} else {
				result.push('');
			}
		}
	}
	return result;
}


function deleteUselessNumbers(task) {
	const items = document.querySelectorAll(".item");
	const result = getUselessNumbers(task);
	

	for (let i = 0; i < result.length; i++) {
		for (let j = 1; j <= 9; j++) {
			if(result[i].includes(j.toString())) items[i].innerHTML += `<div class="value">${j}</div>`;
			else items[i].innerHTML += `<div class="value"></div>`;
		}
	}
}

function colorizeValue(number, color) {
	const values = document.querySelectorAll('.value');

	values.forEach(e => {
		if(e. innerHTML == number) {
			e.classList.add('color');
			e.style.background = color;
		}
	});
}


function addItems() {
	const sudoku = document.querySelector(".sudoku");
	sudoku.innerHTML = '<div class="item"></div>'.repeat(81);
}



window.addEventListener("DOMContentLoaded", () => {
	const task = task4;
	const btn = document.querySelector(".solver");

	addItems();
	getTask(task);
	deleteUselessNumbers(task);

	btn.addEventListener("click", () => {
		sudokuSolver(task);
		getTask(task);
		deleteUselessNumbers(task);
	});
});