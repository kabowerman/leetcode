
// Finished, took forever to figure out
// 6/10/19

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 == "0" || num2 == "0") { return "0"; }
    if (num1 == null && num2 == null) { return ""; } 
    if (num1 == null || num1 == "1") { return num2; } // Edge case, if num1 is null or num1 is 1, return num2
    if (num2 == null || num2 == "1") { return num1; }
    var arr = [];
    var skip = 0;
    for (var i = 0; i < num1.length; i++) {
        var first = Number(num1.charAt(i));
        for (var j = 0; j < num2.length; j++) {
            var second = Number(num2.charAt(j));
            var position = i + j + skip;
            var product = first * second;
            if (product > 9) {
                if (position == 0) { arr[0] = product; }
                else {
                    if (arr[position] == undefined) { arr[position] = product % 10; }
                    else {arr[position] += product % 10; }
                    arr[position - 1] += Math.trunc(product/10);
                }
            }
            else {
                if (arr[position] == undefined) {
                    if (position == 0) { arr[0] = 0; arr[1] = product; skip = 1; }
                    else { arr[position] = product; }
                }
                else { arr[position] += product; }
            }
        }
    }
    for (var i = arr.length - 1; i > 0; i--) {
        if (arr[i] > 9) { arr[i-1] += Math.trunc(arr[i]/10); arr[i] = arr[i] % 10; }
    }
    return appendArray(arr);
};

var appendArray = function(arr) {
    var ret = "";
    for (var i = 0; i < arr.length; i++) {
        if (i == 0 && arr[i] == 0) {}
        else { ret += arr[i]; }
    }
    return ret;
}

var num1 = "9";
var num2 = "99";

var ans = multiply(num1, num2);

console.log(ans);

// 99, 93
// 0,0 --> 9*9 = 81, 81 > 9 so arr[i+j = 0] = Math.trunc(81/10), arr[i+j+1 = 1] = 81 % 10 --> [8,1]
// 0,1 --> 9*3 = 27, 27 > 9 so arr[i+j = 1] += Math.trunc(27/10), arr[i+j+1 = 2] += 27 % 10 --> [8,1+2,7] = [8,3,7]
// 1,0 --> 9*9 = 81, 81 > 9 so arr[i+j = 1] += Math.trunc(81/10), arr[i+j+1 = 2] += 81 % 10 --> [8,3+8,7+1] = [8,11,8] = [9,1,8]
// 1,1 --> 9*3 = 27, 27 > 9 so arr[i+j = 2] += Math.trunc(27/10), arr[i+j+1 = 3] = 27 % 10 --> [9,1,8+2,7] = [9,1,10,7] = [9,2,0,7]

// num1 = 19, num2 = 93 --> 1767 = 900 + 30 + 810 + 27
// 0,0 --> 1*9 = 9, 9 is not greater than 9, arr[0] = 9 --> [9]
// 0,1 --> 1*3 = 3, 3 is not greater than 9, arr[1] = 3 --> [9,3]
// 1,0 --> 9*9 = 81, 81 > 9, arr[i+j = 1] += 8, --> [17,4]
 
// num1 = 27, num2 = 32 --> 864 = 2*3*100 + 2*2*10 + 7*3*10 + 7*2 = 600 + 40 + 210 + 14
// i = 0, j = 0 --> 2*3 = 6, 6 < 9 so arr[i+j = 0] = 6 --> arr = [6]
// i = 0, j = 1 --> 2*2 = 4, 4 < 9 so arr[i+j = 1] = 4 --> arr = [6, 4]
// i = 1, j = 0 --> 7*3 = 21, 21 > 9 so arr[i+j = 1] += 21 % 10, arr[i+j-1 = 0] += Math.trunc(21/10) --> arr = [6+2, 4+1] = [8, 5]
// i = 1, j = 1 --> 7*2 = 14, 14 > 9 so arr[i+j = 2] = 

// 11, 111 -->
// 0,0 --> 1*1 = 1, arr[0] is undef so arr[0] = 1 --> [1]
// 0,1 --> arr[1] is undef so arr[1] = 1 --> [1,1]
// 0,2 --> arr[2] is undef so arr[2] = 1 --> [1,1,1]
// 1,0 --> arr[1] += 1 --> [1,1+1,1] = [1,2,1]
// 1,1 --> arr[2] += 1 --> [1,2,1+1] = [1,2,2]
// 1,2 --> arr[3] is undef so arr[3] = 1 --> [1,2,2,1]


// 99, 99
// 0,0 --> 9*9 = 81, 81 > 9 so arr[i+j = 0] = Math.trunc(81/10), arr[i+j+1 = 1] = 81 % 10 --> [8,1]
// 0,1 --> 9*9 = 81, 81 > 9 so arr[i+j = 1] += Math.trunc(81/10), arr[i+j+1 = 2] += 81 % 10 --> [8,8+1,1] = [8,9,1]
// 1,0 --> 9*9 = 81, 81 > 9 so arr[i+j = 1] += Math.trunc(81/10), arr[i+j+1 = 2] += 81 % 10 --> [8,9+8,1+1] = [8,17,2] = [9,7,2]
// 1,1 --> 9*9 = 81, 81 > 9 so arr[i+j = 2] += Math.trunc(81/10), arr[i+j+1 = 3] = 81 % 10 --> [9,7,2+8,1] = [9,7,10,1] = [9,8,0,1]
