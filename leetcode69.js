
// Finished immediately, pretty efficient

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var i = 1;
    while (i*i <= x) {
        i++;
    }
    return i-1;
};

