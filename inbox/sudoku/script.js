window.addEventListener(('DOMContentLoaded'), () => {

	const task1 = [["","4","","1","3","8","9","5","7"],
			   ["7","3","1","","9","5","6","","8"],
			   ["8","","","7","","4","","1","2"],
			   ["2","5","","","4","","8","7",""],
			   ["4","1","9","8","","7","","","6"],
			   ["3","","7","5","1","6","4","","9"],
			   ["9","","","4","7","","","6","5"],
			   ["5","7","3","6","","","2","9",""],
			   ["","6","4","9","5","2","7","8",""]];

			  


const task2 = [[".","5",".","1",".",".",".",".","8"],
			["2","3",".","6","7",".",".",".","5"],
			[".","4","1",".",".","3","7","6","."],
			[".",".","7",".",".","9",".",".","1"],
			["5","1","8","3",".",".",".","9","."],
			[".","9",".","7","1",".","5","8","."],
			["3",".",".",".",".","1",".","5","."],
			[".",".","5",".",".","7","8",".","2"],
			["1",".",".","9","6",".","4",".","."]];

const task3 = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];

// for (let i = 0; i < 20; i++) {
// 	sudoku(task1);
// }

// console.log("task", task1);	





function sudokuSolver(board){
	const numbers = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
	const rows = getRows(board);
	const cols = getCols(board);
	// const areas = getAreas(board);

	// console.log(areas);


	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if(getValue(i, j) != undefined && board[i][j] === ''){
				board[i][j] = getValue(i, j);
			}
		}		
	}








	
	
	
	
	
	
	function getValue(posRow, posCol) {
		const num = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
		const row = rows[posRow];
		const col = cols[posCol];
		const arr = [];
		row.forEach(e => {
			if(num.has(e)){
				num.delete(e);
			}
		});
		col.forEach(e => {
			if(num.has(e)){
				num.delete(e);
			}
		});
		num.forEach(e => {
			arr.push(e);
		});
		if(num.size === 1)  return arr[0];
		
	}
	
	function getRows(x){
		const rowMain = [];
		for (let i = 0; i < x.length; i++) {  
			const row = [];
			for (let j = 0; j < x[i].length; j++) {
				row.push(x[i][j]);
			}
			rowMain.push(row);
		}
		return rowMain;
	}
	
	function getCols(x){
		const colMain = [];
		for (let i = 0; i < x.length; i++) {  
			const col = [];
			for (let j = 0; j < x[i].length; j++) {
				col.push(x[j][i]);
			}
			colMain.push(col);
		}
		return colMain;
	}
	// function getAreas(x){
	// 	const areaMain = [];
	// 	for (let i = 0; i < 9; i++) {
	// 		for (let j = 0; j < 9; j++){
	// 			areaMain.push(x[(i%3)*3+j%3][Math.floor(i/3)*3+Math.floor(j/3)]);
	// 		}
	// 		console.log(areaMain);
	// 	}
	// 	return areaMain;
	// }

}







// sudoku([[".","4",".","1","3","8","9","5","7"],
//         ["7","3","1",".","9","5","6",".","8"],
//         ["8",".",".","7",".","4",".","1","2"],
//         ["2","5",".",".","4",".","8","7","."],
//         ["4","1","9","8",".","7",".",".","6"],
//         ["3",".","7","5","1","6","4",".","9"],
//         ["9",".",".","4","7",".",".","6","5"],
//         ["5","7","3","6",".",".","2","9","."],
//         [".","6","4","9","5","2","7","8","."]]);
	const sudoku = document.querySelector('.sudoku');

	function addItems() {
		for (let i = 0; i < 81; i++) {       
			const item = document.createElement('div');
			item.classList.add('item');
			sudoku.append(item);
		}
	}
	addItems();
	const items = document.querySelectorAll('.item');
	
	function getTask() {
		let arr = [];
		for (let i = 0; i < 9; i++) {
			task1[i].forEach(e => {
				arr.push(e);
			});		
		}
		for (let i = 0; i < items.length; i++) {
			items[i].innerHTML = arr[i];
		}
	}

	getTask();

	const btn = document.querySelector('.solver');

	btn.addEventListener('click', () => {
		for (let i = 0; i < 10; i++) {
			sudokuSolver(task1);
			
		}
		getTask();
	});
});






