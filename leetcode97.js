
// FINISHED 8/1/19, very slow

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length != s3.length) { return false; }
    if (s1 + s2 == s3 || s2 + s1 == s3) { return true; }
    return actualWork(s1, s2, s3)
};

var actualWork = function(s1, s2, s3) {
    if (s1 == "") {
        return s2 == s3;
    }
    if (s2 == "") {
        return s1 == s3;
    }
    // if (s1.charAt(0) != s2.charAt(0)) {
    //     if (s1.charAt(0) == s3.charAt(0)) {
    //         return isInterleave(s1.substring(1), s2, s3.substring(1));
    //     }
    //     if (s2.charAt(0) == s3.charAt(0)) {
    //         return isInterleave(s1, s2.substring(1), s3.substring(1));
    //     }
    // }
    // else {
    //     if (s1.charAt(0) == s3.charAt(0)) {
    //         return isInterleave(s1.substring(1), s2, s3.substring(1)) || isInterleave(s1, s2.substring(1), s3.substring(1));
    //     }
    // }
    // return false;
    if (s1.charAt(0) == s3.charAt(0)) {
        if (s2.charAt(0) != s3.charAt(0)) {
            return actualWork(s1.substring(1), s2, s3.substring(1));
        }
        else {
            return actualWork(s1.substring(1), s2, s3.substring(1)) || actualWork(s1, s2.substring(1), s3.substring(1));
        }
    }
    else {
        if (s2.charAt(0) == s3.charAt(0)) {
            return actualWork(s1, s2.substring(1), s3.substring(1));
        }
        return false;
    }
}



// var s1 = "aabcc"
// var s2 = "dbbca"
// var s3 = "aadbbbaccc"
// var ans = isInterleave(s1, s2, s3);
// console.log(ans);