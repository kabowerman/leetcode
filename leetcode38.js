
// Finished, but space complexity is absolutely dreadful
// 6/6/19

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    return rec("1", 1, n, "");
};

var rec = function(str, x, n, s) {
    if (x == n) { return str; }
    var i = 1; // the number of consecutive same characters
    while (str.charAt(0) == str.charAt(i)) {
        i++;
    }
    s += "" + i + str.charAt(0);
    str = str.substring(i)
    if (str.length == 0) {
        return rec(s, x + 1, n, "");
    }
    else if (str.length == 1) {
        s += "1" + str;
        return rec(s, x + 1, n, "");
    }
    return rec(str, x, n, s);
}

var rec = function(str, x, n, s) {
    if (x == n) { return str; }
    while (str.length > 1) {
        var i = 1;
        while (str.charAt(0) == str.charAt(i)) {
            i++;
        }
        s += "" + i + str.charAt(0);
        str = str.substring(i);
    }
    if (str.length == 0) {
        return rec(s, x + 1, n, "");
    }
    else { // if str.length == 1 should be only case
        s += "1" + str;
        return rec(s, x + 1, n, "");
    }
}

var x = 3;

var ans = countAndSay(x);
console.log(ans);
// 1: one one
// 11: two ones
// 21: one two, one one
// 1211: one one, one two, two ones
// 111221: three ones, two twos, one one
// 312211: one three, one one, two twos, two ones
// 13112221