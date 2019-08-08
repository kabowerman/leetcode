
// FINISHED


var longestCommonPrefix = function(strs) { 
    if (strs.length == 0) { return ""; }
    if (strs.length == 1) { return strs[0]; }
    var ret = "";
    var end = strs[0].length + 1;
    for (var i = 0; i < end; i++) {
        var curr = strs[0].charAt(0);
        console.log("curr: " + curr)
        for (var j = 1; j < strs.length; j++) {
            if (strs[j].length == 0) { return ret; } // If the string is empty
            if (curr == strs[j].charAt(0)) {
                strs[j] = strs[j].substring(1);
            }
            else { return ret; }
        }
        ret += curr;
        strs[0] = strs[0].substring(1);
    }
    return ret;
};

var x = ["abc","abcc","abc","abca","abca"]

var p = longestCommonPrefix(x)

console.log(p);