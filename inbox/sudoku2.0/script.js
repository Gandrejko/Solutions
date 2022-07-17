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

// console.log(fillSquare(getTask(), startI, startJ))



function getValue(posRow, posCol, board) {
	const num = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
	const numDiff = new Set();
	const row = board[posRow]; //Get row from board
	const col = getCol(posCol, board); //Get column from board
	const area = fillSquare(board, Math.floor(posRow / 3) * 3, Math.floor(posCol / 3) * 3); //Get area from board

	row
	.concat(col)
	.concat(area)
	.forEach((e) => {
		num.delete(e);
		numDiff.add(e);
	});
	return [[...num], [...numDiff]];
}


function findDiffValueRow(posRow, board) {
	const row = board[posRow];
	const resRow = [];
	let result = 0;
	let index = 0;

	for (let i = 0; i < row.length; i++) {
		const element = [i];
		if(row[i] === '') {
			element[1] = getValue(posRow, i, board)[1].filter(Boolean);
		} else{
			element[1] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
		}
		resRow.push(element);
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

function findDiffValueCol(posCol, board) {
	const col = getCol(posCol, board);
	const resCol = [];
	let result = 0;
	let index = 0;

	for (let i = 0; i < col.length; i++) {
		const element = [i];
		if(col[i] === '') {
			element[1] = getValue(i, posCol, board)[1].filter(Boolean);
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
			const res = getValue(i, j, board);
			if (board[i][j] === "" && res[0].length === 1) {
				board[i][j] = res[0][0];
				isChange = true;
			}
			if(i === 8) {
				const resDiffCol = findDiffValueCol(j, board);
				if(resDiffCol[1] !== 0) {
					board[resDiffCol[1]][j] = resDiffCol[0];
					isChange = true;
				}
			}			
		}
		const resDiffRow = findDiffValueRow(i, board);
		
		if(resDiffRow[1] !== 0) {
			board[i][resDiffRow[1]] = resDiffRow[0];
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


function getTask() {
	const items = document.querySelectorAll(".item");
	const task = [];
	const arr = [];

	for (let i = 0; i < items.length; i++) {
		arr.push(items[i].value);
		if(arr.length === 9) {
			task.push([...arr]);
			arr.splice(0, arr.length);
		}
	}

	return task;
}

function fillBoard(board) {
	const items = document.querySelectorAll(".item");
	let arr = board.flat();

	for (let i = 0; i < items.length; i++) {
		items[i].value = arr[i];
	}
	
}


function getUselessNumbers(task) {
	const result = [];
	for (let i = 0; i < task.length; i++) {
		for (let j = 0; j < task[i].length; j++) {
			if(task[i][j] === '') {
				result.push(getValue(i, j, task)[0].filter(x => x != ''));
			} else {
				result.push('');
			}
		}
	}
	return result;
}


// function deleteUselessNumbers(task) {
// 	const items = document.querySelectorAll(".item");
// 	const result = getUselessNumbers(task);
	

// 	for (let i = 0; i < result.length; i++) {
// 		for (let j = 1; j <= 9; j++) {
// 			if(result[i].includes(j.toString())) items[i].innerHTML += `<div class="value">${j}</div>`;
// 			else items[i].innerHTML += `<div class="value"></div>`;
// 		}
// 	}
// }


function addItems() {
	const sudoku = document.querySelector(".sudoku");
	sudoku.innerHTML = '<input type="text" maxlength="1" class="item"></input>'.repeat(81);
}



window.addEventListener("DOMContentLoaded", () => {
	const btn = document.querySelector(".solver");
	addItems();	
	const getBoard = localStorage.getItem('board');
    console.log("getBoard", getBoard);
	const task = getTask();

	fillBoard(task);
	localStorage.setItem('board', JSON.stringify(task));		

	// deleteUselessNumbers(task);

	btn.addEventListener("click", () => {
		const task = getTask();
		sudokuSolver(task);
		fillBoard(task);
		// deleteUselessNumbers(task);
	});
});