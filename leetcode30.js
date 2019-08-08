
// FINISHED TWO WAYS
// valid IS MORE INEFFICENT, MORE INTUITIVE (USES ARRAYS)
// isValid IS MORE EFFICIENT, USES MAPS

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (s.length == 0 || words.length == 0) { return []; }
    var ret = [];
    for (var i = 0; i < s.length - words.length*words[0].length + 1; i++) {
        if (isValid(s.substring(i, i+words[0].length*words.length), words)) {
            ret[ret.length] = i;
        }
    }
    return ret;
};

var valid = function(s, words) {
    var wordsCopy = [...words];
    for (var j = 0; j < wordsCopy.length; j++) {
        if (s.substring(0, wordsCopy[0].length) == wordsCopy[j]) {
            s = s.substring(wordsCopy[0].length);
            wordsCopy.splice(j, 1)
            j = -1;
        }
    }
    return s.length == 0;
}

var isValid = function(s, words) {
    var map = new Map();
    for (word of words) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }
    var i = 0;
    while (s.length != 0) {
        var sub = s.substring(0, words[0].length);
        if (map.has(sub) && map.get(sub) >= 1) {
            if (s.length == words[0].length) { return true; }
            map.set(sub, map.get(sub) - 1);
            s = s.substring(words[0].length);
        }
        else {
            return false;
        }
    }
    return true;
}

// Given an array, prints the array
var printArray = function(arr) {
    var p = "";
    for (var i = 0; i < arr.length - 1; i++) {
        p += arr[i] + ", ";
    }
    p += arr[arr.length - 1];
    console.log(p);
}

var s = "foobarfoo"
var words = ["bar", "foo"]

var ans = findSubstring(s, words);

console.log(ans);