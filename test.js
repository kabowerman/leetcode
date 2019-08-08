


/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    
};

// x1, y1, x2, y2
// Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
// Output: true

// Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
// Output: false


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) { return false; }
    var xCopy = x;
    var rev = "";
    while (x != 0) {
        rev += x % 10;
        x -= (x % 10);
        x /= 10;
        console.log(rev);
        console.log(x);
    }
    var num = Number(rev);
    return num == xCopy;
};


/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    var arr = [];
    return work(S, arr);
};

// given string s, returns index of last instance of c
var lastInst = function(s, c) {
    var ret = -1;
    while (s.includes(c)) {
        ret += s.indexOf(c) + 1;
        s = s.substring(s.indexOf(c) + 1);
    }
    return ret;
}

var work = function(s, arr) {
    if (s.length == 0) { return arr; }
    var curr = s.charAt(0);
    var lastIdx = lastInst(s, curr);
    var test = s.substring(0, lastIdx + 1);
    var i = 0;
    while (i < test.length) {
        var currInst = lastInst(s, s.charAt(i));
        if (currInst + 1 > test.length) {
            i = -1;
            test = s.substring(0, currInst + 1);
        }
        i++;
    }
    arr[arr.length] = test.length;
    console.log(test);
    return work(s.substring(test.length), arr);
}


// console.log(lastInst(s, "a"));

// Input: S = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.




/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    // obviously need to work from back
    if (num1.length == 0 || num1 == "0") { return num2; }
    if (num2.length == 0 || num2 == "0") { return num1; }
    if (num1.length < num2.length) { return addStrings(num2, num1); } // guarantees num1 will be longer or same length
    var arr1 = [], arr2 = [];
    for (var i = 0; i < num1.length; i++) {
        arr1[arr1.length] = Number(num1.charAt(i));
    }
    for (var i = 0; i < num2.length; i++) {
        arr2[arr2.length] = Number(num2.charAt(i));
    }
    var carry = 0;
    var str = "";
    for (var i = arr1.length - 1; i >= 0; i--) {
        var curr1 = arr1[i];
        var i2 = arr1.length - i;
        i2 = arr2.length - i2;
        var curr2 = 0;
        if (i2 >= 0) {
            curr2 = arr2[i2];
        }
        var curr = curr1 + curr2 + carry;
        if (curr > 9) {
            curr = curr % 10;
            carry = 1;
        }
        else {
            carry = 0;
        }
        str = curr + str;
    }
    if (carry == 1) {
        str = 1 + str;
    }
    return str;
};




/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
    if (N == 0) { return cells; }
    var first = "";
    for (var i = 0; i < cells.length; i++) {
        first += cells[i];
    }
    var map = {};
    map[first] = "0";
    var n = 0;
    var lastStr = first;
    while (n < N) {
        var str = getNext(lastStr);
        n++;
        if (str == lastStr) { return makeArr(str); }
        if (map[str] != undefined) {
            var num = n - map[str];
            var max = (N - n) % num;
            for (var i = 0; i < max; i++) {
                str = getNext(str);
            }
            return makeArr(str);
        }
        else {
            map[str] = n;
        }
        lastStr = str;
    }
    return makeArr(str);
};

var getNext = function(lastStr) {
    var str = "0";
    for (var i = 1; i < lastStr.length - 1; i++) {
        if (lastStr.charAt(i-1) == lastStr.charAt(i+1)) {
            str += "1";
        }
        else {
            str += "0";
        }
    }
    str += "0";
    return str;
}

var makeArr = function(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == "1") {
            arr[arr.length] = 1;
        }
        else {
            arr[arr.length] = 0;
        }
    }
    return arr;
}

var cell = "01011001";
var n = 7;
for (var i = 0; i < n; i++) {
    console.log(cell);
    cell = getNext(cell);
}