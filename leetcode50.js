
// FINISHED, NOT THAT GREAT

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (x < 0 && n % 2 == 0) { x *= -1; }
    if (n == 0 || x == 1) { return 1; }
    if (n < 0) {
        x = 1 / x;
        n *= -1;
    }
    while (n % 2 == 0) {
        x *= x;
        n /= 2;
    }
    var ret = x;
    while (n > 1) {
        ret *= x;
        n--;
    }
    return ret;
}