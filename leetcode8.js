/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = trimWhite(str);
    //var ans = loopThru(str);
    var ans = newLoop(str);
    console.log("ans: " + ans);
    ans = Number(ans);
    if (ans < -2147483648) { return -2147483648; }
    if (ans > 2147483647) { return 2147483647; }
    return ans;
};

// Given a string str, trims the leading white space
function trimWhite(str) {
    while (str.charAt(0) == ' ' && str.length != 0) {
        str = str.substring(1);
    }
    return str;
}

// Given a string str
// Returns: "0" if answer should be 0, otherwise returns string of the number
function loopThru(str) {
    if (str.length == 0) { return "0"; }
    var numString = "";
    var plusOrNegFound = false;
    while (str.length != 0) {
        var curr = str.charAt(0);
        if (curr == '-') {
            if (plusOrNegFound) { return "0"; }
            plusOrNegFound = true;
            numString += curr;
            str = str.substring(1);
        } 
        else if (curr == '+') { 
            if (plusOrNegFound) { return "0"; }
            plusOrNegFound = true;
            str = str.substring(1);
        }
        else {
            if (curr == " ") { return numString; }
            var test = Number(curr);
            if (test > 0 || test <= 0) {
                numString += curr;
                // console.log(numString);
                str = str.substring(1);
            }
            else { 
                if (numString.length > 0 && (Number(numString) > 0 || Number(numString) <= 0)) { return numString; }
                return "0"; 
            }
        }
    }
    if (numString == "-") { return "0"; }
    return numString;
}

function newLoop(str) {
    var zero = true;
    var plusOrNegFound = false;
    var numFound = false;
    var retVal = "";
    while (str.length != 0) {
        var curr = str.charAt(0);
        var num = Number(curr);
        if (curr == " ") { if (zero) { return "0"; } return retVal; } // if curr is space, either return zero or the retVal
        else if (curr == "+") {
            if (!zero) { return retVal; }
            if (plusOrNegFound) { if (zero) { return "0"; } return retVal; } // if already found plus or neg, return
            plusOrNegFound = true;
            str = str.substring(1);
        } 
        else if (curr == "-") {
            if (!zero) { return retVal; }
            if (plusOrNegFound) { if (zero) { return "0"; } return retVal; } // if already found plus or neg, return
            plusOrNegFound = true;
            retVal += curr;
            str = str.substring(1);
        }
        else if (!(num > 0 || num <= 0)) { { if (zero) { return "0"; } return retVal; } } // if curr is letter, return either zero or the retVal
        else { 
            numFound = true;
            retVal += curr;
            str = str.substring(1);
            zero = false;
        }
    }
    if (zero) { return "0"; }
    return retVal;
}