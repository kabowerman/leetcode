/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) { return s; } // if s is length 0 or 1, return s
    if (isPalindrome(s)) { return s; } // if it's already a palindrome, return it
    var str = s.charAt(0);
    // "aded"
    var i = 0;
    var j = 1;
    while (i < s.length - str.length && j < s.length - str.length) {

    }
};

// Naive Solution - Works, but extremely slow with Time Complexity O(n^2)
var naive = function(s) {
    if (s.length < 2) { return s; } // if s is length 0 or 1, return s
    if (isPalindrome(s)) { return s; } // if it's already a palindrome, return it
    var str = s.charAt(0);
    for (var i = 0; i < s.length - 1; i++) {
        for (var j = i + str.length; j < s.length; j++) {
            var currStr = s.substring(i, j + 1);
            if (isPalindrome(currStr)) {
                if (currStr.length > str.length) {
                    str = currStr;
                }
            }
            if (currStr.length == s.substring(i).length) { j = s.length + 1; }
        }
    }
    return str;
};

var isPalindrome = function(str) {
    var s = "" + str;
    while (s.length > 1) {
        if (s.charAt(0) != s.charAt(s.length - 1)) { return false; }
        s = s.substring(1, s.length - 1);
    }
    return true;
}


// Just a liiiiiitttle better than Naive. 
var newSolution = function(s) {
    if (s.length < 2) { return s; } // if s is length 0 or 1, return s
    if (isPalindrome(s)) { return s; } // if it's already a palindrome, return it
    var str = s.charAt(0);
    for (var i = 0; i < s.length; i++) {
        var currChar = s.charAt(i); // The character to compare to
        var tempStr = s.substring(i+1); // The string without the currently found index of the character
        var nextIdx = tempStr.indexOf(currChar); // The index of the next character
        var currTrim = i+1; // The current number of letters cut off from tempStr
        while (nextIdx != -1) {
            var currStr = s.substring(i, nextIdx + currTrim + 1);
            if (currStr.length > str.length && isPalindrome(currStr)) {
                str = currStr;
            }
            tempStr = tempStr.substring(nextIdx + 1);
            currTrim += nextIdx + 1;
            nextIdx = tempStr.indexOf(currChar);
        }
    }
    return str;
}

var s = "bartdabadbde";
var currChar = s.charAt(0); // The character to compare to
var tempStr = s.substring(0+1); // The string without the currently found index of the character
var nextIdx = tempStr.indexOf(currChar); // The index of the next character
var currTrim = 1; // The current number of letters cut off from tempStr
var currStr = s.substring(0, nextIdx + currTrim + 1);
tempStr = tempStr.substring(nextIdx + 1);
currTrim += nextIdx + 1;
nextIdx = tempStr.indexOf(currChar);

var ans = newSolution(s);
console.log(ans);
// var currChar = s.charAt(0); // The character to compare to
// var tempStr = s.substring(0+1); // The string without the currently found index of the character
// var nextIdx = tempStr.indexOf(currChar); // The index of the next character
// var currTrim = 1;
// var currStr = s.substring(0, nextIdx + 2); // "abeaedevade"
// console.log("currChar: " + currChar)
// console.log("tempStr: " + tempStr)
// console.log("nextIdx: " + nextIdx)
// console.log("currStr: " + currStr);
// console.log("currTrim: " + currTrim)

// currTrim += nextIdx + 1;
// tempStr = s.substring(nextIdx + currTrim + 1);
// nextIdx = tempStr.indexOf(currChar) + currTrim;

// console.log("currChar: " + currChar)
// console.log("tempStr: " + tempStr)
// console.log("nextIdx: " + nextIdx)
// console.log("currStr: " + currStr);
// console.log("currTrim: " + currTrim)
// var check = str.substring(1, 100);
// console.log(check);

// var ans = longestPalindrome(str);

// console.log(ans);