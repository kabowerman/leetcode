
// FINISHED, SOLVED 2 WAYS (Neither are recursive)

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length == 0) { return []; }
    if (digits.length == 1) { return makeSingle(digits); }
    var ret = [], pass = [], arr = [], numPass = 1;
    for (var i = 0; i < digits.length; i++) {
        arr[arr.length] = 1;
        var currDig = digits.charAt(i);
        currDig = Number(currDig);
        if ((currDig < 7 && currDig > 1) || currDig == 8) { pass[i] = 3; numPass *= 3; } // if a key with 3 letters
        else if (currDig == 7 || currDig == 9) { pass[i] = 4; numPass *= 4; } 
        else { pass[i] = 0; }
    }
    for (var i = 0; i < numPass; i++) {
        var newArr = getArr(arr, pass);
        ret[ret.length] = arrToString(newArr, digits);
    }
    return ret;
}

// alternate solution, pretty slow
// requires the makeSingle and retLetter methods
var alternateSolution = function(digits) {
    if (digits.length == 0) { return []; }
    if (digits.length == 1) { return makeSingle(digits); }
    var numPasses = 1;
    var factors = [];
    var theDigits = [];
    var ret = [];

    for (var i = 0; i < digits.length; i++) {
        var currDig = digits.charAt(i);
        currDig = Number(currDig);
        theDigits[i] = currDig;
        if ((currDig < 7 && currDig > 1) || currDig == 8) { // if a key with 3 letters
            numPasses *= 3;
            factors[i] = numPasses;
        } 
        else if (currDig == 7 || currDig == 9) { // if a key with 4 letters
            numPasses *= 4;
            factors[i] = numPasses;
        } 
        else {
            pass[i] = 0;
            factors[i] = 1;
        }
    }
    for (var i = 0; i < numPasses; i++) {
        ret[ret.length] = "";
        for (var j = 0; j < digits.length; j++) {
            var pass = Math.trunc(i*factors[j]/numPasses) + 1;
            if (j > 0) {
                pass = pass % (factors[j]/factors[j-1]) + 1;
            }
            if (j == digits.length - 1) {
                pass = pass % (factors[j]/factors[j-1]) + 1;
            }
            console.log("pass:" + pass);
            ret[i] += retLetter(theDigits[j], pass)
        }
    }
    return ret;
}

// Turns an array of passes into the telephone string
// 
var arrToString = function(passes, digits) {
    var str = "";
    for (var i = 0; i < passes.length; i++) {
        var currDig = digits.charAt(i);
        currDig = Number(currDig);
        str += retLetter(currDig, passes[i]);
    }
    return str;
};

// Given the number (num) and the spot on the key (pass), returns the letter in that spot
var retLetter = function(num, pass) { // a = 97, z = 122
    if (num < 2 || num > 9) { return ""; }
    if (num > 7) { pass++; }
    num = num*3 + 90 + pass;
    return String.fromCharCode(num);
}

// Given an array, returns the next valid array that is less than or equal to pass
var getArr = function(arr, pass) {
    var dum = [1];
    for (var j = 0; j < arr.length; j++) {
        if (j == arr.length - 1) {
            return dum;
        }
        if (arr[j] == pass[j]) {
            if (j < arr.length - 1 && arr[j+1] < pass[j+1]) { // if next is valid index that is not already maxed
                arr[j+1]++;
                for (var temp = j; temp >= 0; temp--) {
                    if (arr[temp] == pass[temp]) { arr[temp] = 1; }
                }
                return [...arr];
            }
        }
        else {
            arr[j]++;
            return [...arr];
        }
        dum[dum.length] = 1;
    }
}

var makeSingle = function(digits) {
    // var num = parseInt(digits);
    // ret = [];
    // var x = 3;
    // if (num == 7 || num == 9) {
    //     x = 4;
    // }
    // for (var i = 1; i < x + 1; i++) {
    //     ret += "" + retLetter(num, i)
    // }
    // printArray(ret)
    // return ret;
    if (digits == "2") { return ["a", "b", "c"]; }
    if (digits == "3") { return ["d", "e", "f"]; }
    if (digits == "4") { return ["g", "h", "i"]; }
    if (digits == "5") { return ["j", "k", "l"]; }
    if (digits == "6") { return ["m", "n", "o"]; }
    if (digits == "7") { return ["p", "q", "r", "s"]; }
    if (digits == "8") { return ["t", "u", "v"]; }
    if (digits == "9") { return ["w", "x", "y", "z"]; }
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


// way I want to increment
// [1,1,1], [2,1,1], [3,1,1] --> [1,2,1], [2,2,1], [3,2,1] --> [1,3,1], [2,3,1], [3,3,1] --> [1,4,1], [2,4,1], [3,4,1]
// [1,1,2], [2,1,2], [3,1,2] --> [1,2,2], [2,2,2], [3,2,2] --> [1,3,2], [2,3,2], [3,3,2] --> [1,4,2], [2,4,2], [3,4,2]
// [1,1,3], [2,1,3], [3,1,3] --> [1,2,3], [2,2,3], [3,2,3] --> [1,3,3], [2,3,3], [3,3,3] --> [1,4,3], [2,4,3], [3,4,3]




var x = "2";
var ans = alternateSolution(x);
printArray(ans);

// var x = "332435";
// var ans = letterCombinations(x);
// printArray(ans);