
// NOT FINISHED


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (s == p) { return true; }
    if (p == ".*") { return true; }
    var repeat = p.charAt(1) == "*"; // if first char of p can be repeated, this will be true
    if (s.length == 0 && repeat) { return isMatch(s, p.substring(2)); } // if char can be repeated and s is empty, skip it
    if (s.length == 0 || p.length == 0) { return false; }
    if (p.charAt(p.length - 1) == s.charAt(s.length - 1) || p.charAt(p.length - 1) == ".") { // if same from back or last char is .
        return isMatch(s.substring(0, s.length - 1), p.substring(0, p.length - 1));
    }
    if (!repeat) {
        if (p.charAt(0) == s.charAt(0)) { // if same from front
            return isMatch(s.substring(1), p.substring(1));
        }
        if (p.charAt(0) == ".") { // if wild char and not repeat, remove first char from both
            return isMatch(s.substring(1), p.substring(1));
        }
        return false; // if firstP can't be repeated and is not . or same as firstS, return false
    }
    // Everything after this means first char can be repeated
    if (p.charAt(0) != "." && s.charAt(0) != p.charAt(0)) { // if firstP can be repeated but isn't equal to firstS, skip it
        return isMatch(s, p.substring(2));
    }
    var i = 0;
    var p1 = "", s1 = "",p2 = "", s2 = "";
    while (s.charAt(i) == s.charAt(0)) {
        s1 += s.charAt(i);
        i++;
    }
    var s2 = s.substring(i); // Everything after the repeated char
    if (s2 == "") { // this happens when s is just one letter repeated
        if (p.charAt(0) == "." || p.charAt(0) == s.charAt(0)) {
            if (p.length == 2) { return true; }
        }
    }
    i = 0;
    while (p.charAt(i) == p.charAt(0) || p.charAt(i) == ".") {
        if (p.charAt(i+1) == "*") {
            p1 += p.charAt(i) + "*";
            i++;
        }
        else {
            p1 += p.charAt(i);
        }
        i++;
        p2 = p.substring(i);
        if (isMatch(s1, p1) && isMatch(s2, p2)) { return true; }
    }
    return false;
};



var newCheck = function(s, p) {
    if (s == p) { return true; }
    if (p == ".*") { return true; }
    var repeat = p.charAt(1) == "*"; // true if first char can be repeated
    if (s.length == 0) {
        if (repeat) { return newCheck(s, p.substring(2)); }
        else { return false; }
    }

    var lastRep = p.charAt(p.length - 1) = "*";
    if (!lastRep) { // if lastChar can't be repeated
        if (p.charAt(p.length - 1) == "." || s.charAt(s.length - 1) == p.charAt(p.length - 1)) {
            return 
        }
    }








    if (p.length == 0) { return false; }
    if (!repeat) { // if first char can't be repeated
        if (p.charAt(0) == "." || p.charAt(0) == s.charAt(0)) { // if first of p is same as first of s, remove it
            return newCheck(s.substring(1), p.substring(1));
        }
        else { return false; }
    }
    // Everything after this means first char can be repeated
    if (p.charAt(p.length - 1) != "*") {
        if (p.charAt(p.length - 1) == "." || p.charAt(p.length - 1) == s.charAt(s.length - 1)) {
            return newCheck(s.substring(0, s.length - 1), p.substring(0, p.length - 1));
        }
        else { return false; }
    }
    else {
        if (p.charAt(p.length - 2) == ".") {

        }
        else {
            if (s.charAt(s.length - 1) == p.charAt(p.length - 2)) {
                return newCheck(s.substring(0, s.length - 2));
            }
        }
    }

}

var tryIt = function(s, p) {
    if (s == p) { return true; }

    var firstRep = p.charAt(1) == "*";
    var lastRep = p.charAt(p.length - 1) = "*";
    if (!lastRep) { // if lastChar can't be repeated
        if (p.charAt(p.length - 1) == "." || s.charAt(s.length - 1) == p.charAt(p.length - 1)) {
            return 
        }
    }
}


// returns true if s contains p
// Used in isMatch when p begins with .*
var containsFront = function(s, p) {
    if (s == p) { return true; }
    if (p.length == 0) { return true; }
    if (p == ".*") { return true; }
    var repeat = p.charAt(1) == "*";
    if (repeat) { return containsFront(s, p.substring(2)); }
    // everything else is unrepeated
    var firstP = p.charAt(0);
}

var s = "abcdedabc";
var p = ".*abcd*";
// When you get to .*, need to

var s = "cbacbbabbcaabbb";
var p = "b*c*.*a*..a.*c*.*";

var a = "abcdefg";
var b = "b";
console.log(a.includes(b));
var ans = a.substring(a.indexOf(b) + 1);
console.log(ans);

// s = cbacbbabbcaabbb, p = b*c*.*a*..a.*c*.*
// gets trimmed, s = cbacbbabbcaabbb, p = c*.*a*..a.*c*.*
// s1 = c, p1 = c* OR c*.* --> both are true
// s2  

// would check 
// var ans = isMatch(s,p);
// console.log(ans);

    // NEED TO FIND FIRST PART OF P THAT ISNT EQUAL TO ITS FIRST CHARACTER, SAME WITH S
    
    // get first char from s, figure out if next thing is same letter
    // figure out everything that first char of p can be
    // var letters = "abcdefghijklmnopqrstuvwxyz";
    // var cands = p.charAt(0) == "." ? letters.split("") : [p.charAt(0)]; // candidates of what it can be
    // var strToRemove = "";
    // if (repeat) {
    //     if (p.charAt(0) != "." && p.charAt(0) != s.charAt(0)) { // if firstP is not . and it can be repeated and is not equal to firstS, skip it
    //         return isMatch(s, p.substring(2));
    //     }
    //     var i = 0;
    //     while (s.charAt(i) == s.charAt(0)) {
    //         strToRemove += s.charAt(i);
    //         i++;
    //     }
    // }
    
    // if (repeat) {
    //     return isMatch(s, p.substring(2));
    // }
    // return isMatch(s, p.substring(1));


// when it gets to this method it will be trimmed
var onceTrimmed = function(s, p) {

}

// this will split p into an array of itself
// so a*ab* will become [a*,a,b*]
var splitP = function(p) {
    var i = 0; 
    var ret = [];
    for (i = 0; i < p.length; i++) {
        if (p.charAt(i+1) == "*") {
            ret[ret.length] = p.substring(i, i+2);
            i++;
        }
        else {
            ret[ret.length] = p.substring(i, i+1);
        }
    }
    return ret;
}
// s = aa, p = a --> false
// s = aa, p = a* --> true
// s = aa, p = .* --> true
// s = aab, p = c*a*b --> true
// s = mississippi, p = mis*is*p*. --> false

// s = aaaab, p = .*ab --> Need to make sure 
// s = abbbb, p = abb*
// s = aaabbb, p = a*abb*b --> s = aaabb, p = a*abb*
// find next char in s that isn't equal to first char of p
// this is b, so string up to there is aaa
// find next char of p that isn't equal to first char of p
// this is b, so p up to there is a*a, which needs to match aaa



// s = aaabbb, p = a*a.bb*
// string for s is aaa
// string for p is a*a.
// aaa vs a*a. --> aa vs a*a --> a vs a* --> true
// bbb vs bb* --> bb vs b* --> true

// string for s is aaa
// string for p is a*a

// s = aaabbb, p = a*a.*bb*
// string for s is aaa
// string for p is a*a.*
// aaa vs a*a.* --> can't go anywhere

// s = aaabbb, p = a*a..bb*
// string for s is aaa
// string for p is a*a OR a*a. OR a*a..
// FIRST WITH s1 = aaa, s2 = bbb, p1 = a*a, p2 = ..bb*
// s1 vs p1 --> aaa vs a*a --> aa vs a* --> true
// s2 vs p2 --> bbb vs ..b* --> bb vs .b* --> b vs b* --> true
// since this worked, we don't need to check the others, and so this is true
