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

function getRows(x) {
  return JSON.parse(JSON.stringify(x));
}

function getCols(x) {
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

function getAreas(board) {
  const areaMain = [];
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      areaMain.push(fillSquare(board, i, j));
    }
  }
  return areaMain;
}

function getValue(posRow, posCol, rows, cols, areas) {
  const num = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  const row = rows[posRow];
  const col = cols[posCol];
  const area = areas[Math.floor(posRow / 3) * 3 + Math.floor(posCol / 3)];

  row
    .concat(col)
    .concat(area)
    .forEach((e) => {
      num.delete(e);
    });

  if (num.size === 1) return [...num][0];
}

function sudokuSolver(board) {
  const rows = getRows(board);
  const cols = getCols(board);
  const areas = getAreas(board);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const res = getValue(i, j, rows, cols, areas);
      if (res !== undefined && board[i][j] === "") {
        board[i][j] = res;
      }
    }
  }
}

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
  const task = task3;

  addItems();

  getTask(task);

  const btn = document.querySelector(".solver");

  btn.addEventListener("click", () => {
    sudokuSolver(task);
    getTask(task);
  });
});
