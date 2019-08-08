
// FINISHED, EXTREMELY FAST, BETTER THAN 70% ON SPACE (Also first try)
// 6/6/19

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) { return s.length; } // if s.length is 0 return 0, if 1 return 1
    var chars = "";
    var ret = 0;
    for (var i = 0; i < s.length; i++) {
        var currChar = s.charAt(i);
        if (chars.indexOf(currChar) != -1) { // if the char is already in the chars string
            chars = chars.substring(1 + chars.indexOf(currChar));
        }
        chars += currChar;
        if (chars.length > ret) { ret = chars.length; } // if length of the string is longer than the longest found so far, update
    }
    return ret;
};

var s = "abcdfwfsfseieiadasd";
var ans = lengthOfLongestSubstring(s);
console.log(ans);