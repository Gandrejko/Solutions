function sudoku(board){
	const numbers = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
	const rows = getRows(board);
	const cols = getCols(board);
	const areas = getAreas(board);
	console.log(getValue(0,1));
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if(getValue(i, j) != undefined && board[i][j] === '.'){
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








	// function oneValue(zone) {
	// 	for (let i = 0; i < zone.length; i++) {
	// 		// console.log(zone[i])
	// 		for (let j = 0; j < zone[i].length; j++) {
	// 			if(45 - getSumZone(zone[i]) <= 9) {
	// 				zone[i][j] = 45 - getSumZone(zone[i]);
	// 			}
	// 		}
	// 	}
	// }
	
	
	
	
	
	
	function getSumZone(zone){
		let sum = 0;
		zone.forEach(element => {
			sum += +element;
		});
		return sum;
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
		for (let i = 0; i < x.length; i++) {  
			for (let j = 0; j < x[i].length; j++) {
				if((i - 1) % 3 === 0 && (j - 1) % 3 === 0) {
					const area = [];
					for (let k = 0; k < 3; k++) {
						for (let l = 0; l < 3; l++) {
							area.push(x[i-1+k][j-1+l]);                       
						}                
					}
					areaMain.push(area);
				}
			}
		}
		return areaMain;
	}


	console.log("task", board);	

}







sudoku([[".","4",".","1","3","8","9","5","7"],
        ["7","3","1",".","9","5","6",".","8"],
        ["8",".",".","7",".","4",".","1","2"],
        ["2","5",".",".","4",".","8","7","."],
        ["4","1","9","8",".","7",".",".","6"],
        ["3",".","7","5","1","6","4",".","9"],
        ["9",".",".","4","7",".",".","6","5"],
        ["5","7","3","6",".",".","2","9","."],
        [".","6","4","9","5","2","7","8","."]]);

























		// function getArrays(x){
		// 	const colMain = [];
		// 	const areaMain = [];
		
		// 	for (let i = 0; i < x.length; i++) {  
		// 		const row = [];
		// 		const col = [];
		// 		for (let j = 0; j < x[i].length; j++) {
		// 			row.push(x[i][j]);
		// 			col.push(x[j][i]);
		// 			if((i - 1) % 3 === 0 && (j - 1) % 3 === 0) {
		// 				const area = [];
		// 				for (let k = 0; k < 3; k++) {
		// 					for (let l = 0; l < 3; l++) {
		// 						area.push(x[i-1+k][j-1+l]);                       
		// 					}                
		// 				}
		// 				areaMain.push(area);
		// 			}
		// 		}
		// 		rowMain.push(row);
		// 		colMain.push(col);
		// 	}
		
		// 	return rowMain, colMain, areaMain;
		// }