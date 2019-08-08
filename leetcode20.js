
// FINISHED, REALLY INEFFICIENT
// DID BOTH RECURSIVE AND NON RECURSIVE

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    function helper(s, i) {
        if (i < 0) { i = 0; }
        if (s == "()") { return true; }
        if (s == "{}") { return true; }
        if (s == "[]") { return true; }
        if (s.length == 0) { return true; }
        if (s.length % 2 == 1) { return false; }
        if (i >= s.length - 1) { return false; }
        if (s.charAt(i) != "(" && s.charAt(i) != ")" && s.charAt(i) != "{" && s.charAt(i) != "}" && s.charAt(i) != "[" && s.charAt(i) != "]") {
            return false;
        }
        if (s.substring(i, i+2) == "()") {
            s = s.substring(0, i) + s.substring(i+2);
            return (helper(s, i-1));
        }
        else if (s.substring(i, i+2) == "{}") {
            s = s.substring(0, i) + s.substring(i+2);
            return (helper(s, i-1));
        }
        else if (s.substring(i, i+2) == "[]") {
            s = s.substring(0, i) + s.substring(i+2);
            return (helper(s, i-2));
        }
        else {
            return helper(s, i+1);
        }
    }
    return helper(s, 0);
};

// var inp = "()[]{}"
// console.log(isValid(inp))


var nonRec = function(s) {
    if (s.length == 0) { return true; }
    if (s.length % 2 == 1) { return false; }

    var count = 0;  

    while (count < s.length - 1) {
        if (s.charAt(count) != "(" && s.charAt(count) != ")" && s.charAt(count) != "{" && s.charAt(count) != "}" && s.charAt(count) != "[" && s.charAt(count) != "]") {
            return false;
        }
        if (s.length == 2) {
            if (s == "()") { return true; }
            if (s == "{}") { return true; }
            if (s == "[]") { return true; }
            return false;
        }
        if (s.substring(count, count + 2) == "()" || s.substring(count, count + 2) == "[]" || s.substring(count, count + 2) == "{}") {
            s = s.substring(0, count) + s.substring(count+2);
            count = 0;
        }
        count++;
    }
    if (s.length == 0) { return true; }
    if (s.length == 2) {
        if (s == "()") { return true; }
        if (s == "{}") { return true; }
        if (s == "[]") { return true; }
        return false;
    }
    return false;
}

var inp ="()[]{}";
console.log(nonRec(inp))