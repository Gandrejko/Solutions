function solveSudoku(board){
	const rows = getRows(board);
	const cols = getCols(board);
	const areas = getAreas(board);

	// console.log(areas);

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if(getValue(i, j) != undefined && board[i][j] === "."){
				board[i][j] = getValue(i, j);
			}
		}	
	}
	
	
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
    for (let i = 0; i < 9; i++) {
        if(board[i].includes('.')){
            solveSudoku(board);
        }
    }
    console.log(board);
	return board;
}




solveSudoku([   ["5","3",".",".","7",".",".",".","."],
                ["6",".",".","1","9","5",".",".","."],
                [".","9","8",".",".",".",".","6","."],
                ["8",".",".",".","6",".",".",".","3"],
                ["4",".",".","8",".","3",".",".","1"],
                ["7",".",".",".","2",".",".",".","6"],
                [".","6",".",".",".",".","2","8","."],
                [".",".",".","4","1","9",".",".","5"],
                [".",".",".",".","8",".",".","7","9"]]);