// 1. do not keep everything in a single callback; keep data separate from methods;
// 2. do not keep rarely used or unused code in comments, wrap blocks in if with a flag and change the value of flag
// 3. do not use implicit data dependenies in these functions
// 4. use descriptive variable names and arguments
// 5. do not mutate state throughout execution
// 6. calculate col, row, area from board

// 81 * 81 * 27
let DEBUG = false;

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
		if(row[i] === '') {
			element[1] = getValue(posRow, i, board)[1].filter(Boolean);
		} else{
			element[1] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
		}
		resRow.push(element);
	}

	for (let i = 1; i < resRow.length + 1; i++) {
		let element = 9;
		const arr = [];
		for (let j = 0; j < 9; j++) {
			if(!resRow[j][1].includes((i).toString())) arr.push(j);		
		}
		if(arr.length === 1) {
			result = i;	
			index = arr[0];		
		}
	}

	return [result, index];
}





function sudokuSolver(board) {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			const res = getValue(i, j, board);
			if (board[i][j] === "" && res[0].length === 1) {
				board[i][j] = res[0][0];
			}
		}
		const resDiffRow = findDiffValueRow(i, board);
		if(resDiffRow[0] !== 0) {
			board[i][resDiffRow[1]] = resDiffRow[0];
		}
	}
}



// ================================

// UI


function getTask(task) {
	const items = document.querySelectorAll(".item");

	let arr = task.flat();

	for (let i = 0; i < items.length; i++) {
		items[i].innerHTML = arr[i];
	}
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

	btn.addEventListener("click", () => {
		sudokuSolver(task);
		getTask(task);
	});
});


// function getDiffValue(posRow, posCol, board) {
// 	const numDiff = new Set();
// 	const row = board[posRow]; //Get row from board
// 	const col = getCol(posCol, board); //Get column from board
// 	const area = fillSquare(board, Math.floor(posRow / 3) * 3, Math.floor(posCol / 3) * 3); //Get area from board

// 	row
// 	.concat(col)
// 	.concat(area)
// 	.forEach((e) => {
// 		numDiff.add(e);
// 	});	
// 	return [...numDiff];
// }