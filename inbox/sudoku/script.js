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

			  


const task2 = [["","5","","1","","","","","8"],
			["2","3","","6","7","","","","5"],
			["","4","1","","","3","7","6",""],
			["","","7","","","9","","","1"],
			["5","1","8","3","","","","9",""],
			["","9","","7","1","","5","8",""],
			["3","","","","","1","","5",""],
			["","","5","","","7","8","","2"],
			["1","","","9","6","","4","",""]];

const task3 = [["5","3","","","7","","","",""],["6","","","1","9","5","","",""],["","9","8","","","","","6",""],["8","","","","6","","","","3"],["4","","","8","","3","","","1"],["7","","","","2","","","","6"],["","6","","","","","2","8",""],["","","","4","1","9","","","5"],["","","","","8","","","7","9"]];
const task4 = [[".",".","9","7","4","8",".",".","."],["7",".",".",".",".",".",".",".","."],[".","2",".","1",".","9",".",".","."],[".",".","7",".",".",".","2","4","."],[".","6","4",".","1",".","5","9","."],[".","9","8",".",".",".","3",".","."],[".",".",".","8",".","3",".","2","."],[".",".",".",".",".",".",".",".","6"],[".",".",".","2","7","5","9",".","."]];
// for (let i = 0; i < 20; i++) {
// 	sudoku(task1);
// }

// console.log("task", task1);	





function sudokuSolver(board){
	const rows = getRows(board);
	const cols = getCols(board);
	const areas = getAreas(board);


	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if(board[i][j] === "."){
				board[i][j] = getValue(i, j);
			}
		}	
	}




 



	
	
	
	function getValuesInArea(posArea) {
		const num = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
		const area = areas[posArea];
		const arr = [];
		area.forEach(e => {
			e.forEach(elem => {
				if(num.has(elem)){
					num.delete(elem);
				}
			})			
		});
		num.forEach(e => {
			arr.push(e);
		});
		console.log(arr);
	}

	getValuesInArea(0);
	
	
	function getValue(posRow, posCol) {
		const num = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
		const row = rows[posRow];
		const col = cols[posCol];
		const area = areas[Math.floor(posRow/3)*3+Math.floor(posCol/3)];
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
		area.forEach(e => {
			e.forEach(elem => {
				if(num.has(elem)){
					num.delete(elem);
				}
			})			
		});

		num.forEach(e => {
			arr.push(e);
		});
		if(num.size === 1)  return arr[0];	
		return ".";	
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
	function getAreas(x){
		const areaMain = [];
		for (let i = 0; i < 9; i += 3) {
			for (let j = 0; j < 9; j += 3){
				const area = [];
				for (let k = 0; k < 3; k++) {
					const areaRow = [];
					for (let l = 0; l < 3; l++) {
						areaRow.push(x[i+k][j+l]);
					}	
					area.push(areaRow);
				}
				areaMain.push(area);
			}
		}
		return areaMain;
	}
}







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
			task4[i].forEach(e => {
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
		sudokuSolver(task4);
		getTask();
	});
});






