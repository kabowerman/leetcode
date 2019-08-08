


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var str = "(";

};

// s is the string, o is number of open, c is number of close, n is n
var builder = function(s, o, c, n) {
    if (c == n) { return s; }
    for (o; o < n; o++) {

    }
}

// [
//     "((()))",
//     "(()())",
//     "(())()",
//     "()(())",
//     "()()()"
// ]'


var addStrings = function(s1, s2) {
    var ret = "";
    var last = 0;
    while (s1.length != 0) {
        if (s2.length == 0) { 
            if (carry) {
                while (s1.length != 0) {
                    
                }
            }
        }
        var curr1 = Number(s1.charAt(s1.length - 1));
        var curr2 = Number(s2.charAt(s2.length - 1));
        var curr = curr1 + curr2;
        if (carry) { curr += last; }
        var carry = curr > 9;
        last = curr;
    }
}