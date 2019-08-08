
// FINISHED, REALLY EFFICIENT FOR BOTH (But doesn't mean much)

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (var i = 0; i < 9; i++) {
        if (!isRowValid(board, i)) { return false; }
        if (!isColumnValid(board, i)) { return false; }
        if (!isBoxValid(board, i)) { return false; }
    }
    return true;
};

// Given a row, determines if that row is valid
var isRowValid = function(arr, row) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[row][i] != ".") { // if there's something in the spot
            if (str.includes(arr[row][i])) { return false; }
            str += arr[row][i];
        }
    }
    return true;
}

// Needs to be passed the following:
// 0,0      0,3     0,6     3,0     3,3     3,6    6,0   6,3    6,6
// 1        2       3       4       5       6      7       8    9
var isBoxValid = function(arr, num) {
    num++; // increment num bc I'm dumb and lazy and don't want to readjust
    var row = 0;
    var col = 0;
    if (num == 4 || num == 5 || num == 6) { row = 3; }
    if (num == 7 || num == 8 || num == 9) { row = 6; }
    if (num % 3 == 2) { col = 3; } // if 2, 5, or 8
    if (num % 3 == 0) { col = 6; } // if 3, 6, or 9
    console.log("row: " + row + " col: " + col)
    var str = "";
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (arr[i+row][j+col] != ".") { // if there's something in the spot
                if (str.includes(arr[i+row][j+col])) { return false; }
                str += arr[i+row][j+col];
            }
        }
    }
    console.log(str)
    return true;
}

// [0][0], [0][1], [0][2], [1][0], [1][1], [1][2], [2][0], [2][1], [2][2]
// [3][3], [3][4], [3][5]...
// [0][3], [0][4], [0][5], [1][3], [1][4], [1][5]
// [3][0], [3][1], [3][2], [4][0], [4][1], [4][2]
// [6][0],

// Given board and the column, returns if the column is valid
var isColumnValid = function(arr, column) {
    var str = ""
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][column] != ".") { // if there's something in the spot
            if (str.includes(arr[i][column])) { return false; }
            str += arr[i][column];
        }
    }
    return true;
}

var inp1 = [[".",".",".","1",".","8",".",".","."],
            [".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."],
            ["4",".",".",".",".","7",".",".","."],
            [".",".",".","7",".",".","8","4","1"],
            [".",".",".",".","7",".",".",".","."],
            [".",".",".",".",".",".","6",".","."],
            [".",".",".","6",".",".",".",".","."],
            ["6",".",".",".",".",".",".",".","."]]

var inp2 = [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ];

var ans = isValidSudoku(inp1);
console.log(ans);