
// Finished, varies from 50%-90% on time, about 50% on space

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) { return s; }
    numRows--;
    // var arr = makeArr(numRows + 1);
    var arr = [""];
    var currRow = 0;
    var up = true; // tells whether to count up or down
    for (var i = 0; i < s.length; i++) {
        arr[currRow] += s.charAt(i);
        if (currRow == 0 && !up) { // if it reaches 0 after going down
            up = true;
            currRow++;
        }
        else if (currRow == numRows && up) { // if it reaches max after going up
            up = false;
            currRow--;
        }
        else if (up) { currRow++; }
        else { currRow--; }
    }
    return makeStr(arr);
};

var makeArr = function(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr[i] = "";
    }
    return arr;
}

var makeStr = function(arr) {
    var ret = arr[0];
    for (var i = 1; i < arr.length; i++) {
        ret += arr[i].substring(9);
    }
    return ret;
}

// Given an array, prints the array
var printArray = function(arr) {
    var p = "";
    for (var i = 0; i < arr.length - 1; i++) {
        p += arr[i] + ", ";
    }
    p += arr[arr.length - 1];
    console.log(p);
}


var s = "PAYPALISHIRING";
var ans = convert(s, 2);
console.log(ans);

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Explanation: 

// P   A   H   N
// A P L S I I G
// Y   I   R

// 0, 4, 8, 12
// 1, 3, 5, 7, 9, 11, 13
// 2, 6, 10

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// 0, 6, 12
// 1, 5, 7, 11, 13
// 2, 4, 8, 10
// 3, 9

// Input: s = "PAYPALISHIRING", numRows = 5
// Output: 
// Explanation:

// P    H 
// A   S I
// Y  I   R
// P L     I G
// A        N

// 0, 8
// 1, 7, 9
// 2, 6, 10
// 3, 5, 11, 13
// 4, 12

// PYAIHRN
// APLSIIG