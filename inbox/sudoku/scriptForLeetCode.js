// 1. do not keep everything in a single callback; keep data separate from methods;
// 2. do not keep rarely used or unused code in comments, wrap blocks in if with a flag and change the value of flag
// 3. do not use implicit data dependenies in these functions
// 4. use descriptive variable names and arguments
// 5. do not mutate state throughout execution
// 6. calculate col, row, area from board

// 81 * 81 * 27


const task1 = [
	[".", "9", "4", ".", ".", ".", "5", ".", "7"],
	[".", "7", ".", ".", "8", ".", ".", ".", "."],
	[".", ".", "6", ".", ".", "4", "1", "2", "."],
	[".", ".", "1", ".", ".", ".", ".", ".", "2"],
	[".", ".", ".", "8", "6", ".", "9", "7", "."],
	[".", "6", ".", "2", ".", "7", ".", ".", "."],
	["2", "3", ".", "4", "1", "8", "7", ".", "6"],
	["6", "4", ".", "7", ".", "5", "3", "1", "9"],
	["5", "1", ".", ".", "9", ".", ".", ".", "."]
];


function getCol(posCol, board) {
	const col = [];
	for(let i=0; i< board.length; i++){
		col.push(board[i][posCol]); //Get column from board
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
		if(row[i] === '.') {
			element[1] = getValue(posRow, i, board)[1].filter(x => x != '');
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
		if(col[i] === '.') {
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
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			const res = getValue(i, j, board);
			if (board[i][j] === "." && res[0].length === 1) {
				board[i][j] = res[0][0];
			}
			if(i === 8) {
				const resDiffCol = findDiffValueCol(j, board);
				if(resDiffCol[1] !== 0) {
					board[resDiffCol[1]][j] = resDiffCol[0];
				}
			}			
		}
		const resDiffRow = findDiffValueRow(i, board);
		
		if(resDiffRow[1] !== 0) {
			board[i][resDiffRow[1]] = resDiffRow[0];
		}		
	}

	if(board.flat().includes('')) {
		sudokuSolver(board);
	}
}



function getUselessNumbers(task) {
	const result = [];
	for (let i = 0; i < task.length; i++) {
		for (let j = 0; j < task[i].length; j++) {
			if(task[i][j] === '.') {
				result.push(getValue(i, j, task)[0].filter(x => x != '.'));
			} else {
				result.push('.');
			}
		}
	}
	return result;
}

