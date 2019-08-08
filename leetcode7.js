
// Finished, good space and time complexity
// 6/7/19

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const maxNum = Math.pow(2, 31) - 1;
    const minNum = -1 * Math.pow(2, 31);
    var ret = x % 10;
    x = Math.trunc(x / 10);
    while (x != 0) {
        if (ret > maxNum / 10 || ret < minNum / 10) { return 0; }
        ret *= 10;
        ret += (x % 10);
        x = Math.trunc(x / 10);
    }
    return ret;
};

var ans = reverse(1);
console.log(ans);