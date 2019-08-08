
// Finished, not very efficient

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a == "0" || a.length == 0) { return b; }
    if (b == "0" || b.length == 0) { return a; }
    var ret = "";
    var count = 0;
    while (a.length != 0 || b.length != 0) {
        var lasta = a.charAt(a.length - 1);
        var lastb = b.charAt(b.length - 1);
        if (a.length == 0) { lasta = "0"; }
        else if (b.length == 0) { lastb = "0"; }
        a = a.substring(0, a.length - 1);
        b = b.substring(0, b.length - 1);
        
        if (lasta == "1") {
            if (lastb == "1") {
                if (ret.charAt(0) == "1") {
                    if (ret.length > count) { ret = "1" + ret; }
                    else { ret = "10" + ret; }
                }
                else { ret = "10" + ret; }
            }
            else {
                if (ret.charAt(0) == "1") {
                    if (ret.length > count) { ret = "10" + ret.substring(1); }
                    else { ret = "1" + ret; }
                }
                else { ret = "1" + ret; }
            }
        }
        else {
            if (lastb == "1") {
                if (ret.charAt(0) == "1") {
                    if (ret.length > count) { ret = "10" + ret.substring(1); }
                    else { ret = "1" + ret; }
                }
                else { ret = "1" + ret; }
            }
            else {
                if (ret.length > count) { }
                else { ret = "0" + ret; }
            }
        }
        count++;
    }
    return ret;
};





// 11, 11
// 1+1 = 10, 10 --> 1+1 = 10 --> 
// 110


// 1010, 1011
// [0,1] --> 1
// [1,1], first spot is 1 --> 101
// [0,0], first spot is 1 --> 110



// 11, 1
// 1+1 = 10, 10 --> 1+1 = 10 --> 100
