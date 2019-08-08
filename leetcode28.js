
// FINISHED, VERY EFFICIENT

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length == 0) { return 0; }
    for (var i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack.substring(i, i + needle.length) == needle) { return i; }
    }
    return -1;
};

var hay = "hello"; // could be up to 5 = hay.len - need.len
var need = "ll"

var ans = strStr(hay, need);
console.log(ans)