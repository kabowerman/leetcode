
// FINISHED, THIS QUESTION SUCKS

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var neg = 1;
    if (dividend == Math.pow(2,31)*-1 && Math.abs(divisor) == 1) { 
        return Math.pow(2,31) - 1;
    }
    if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) { neg = -1; }
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    var ret = 0;
    while (dividend >= divisor) {
        dividend -= divisor;
        ret++;
    }
    return ret*neg;
};

var num1 = 2147483647;
var num2 = 3;

var ans = divide(num1, num2);
console.log(ans);