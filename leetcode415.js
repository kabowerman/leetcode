
// Finished, really bad

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    if (num1.length == 0 && num2.length == 0) { return "0"; }
    var lastSum = 0;
    var arr = []; // arr will hold the numbers in reverse
    while (num1.length > 0 || num2.length > 0) {
        var firstNum = 0;
        var secondNum = 0;
        if (num1.length != 0) {
            firstNum = parseInt(num1.charAt(num1.length - 1));
            num1 = num1.substring(0, num1.length - 1);
        }
        if (num2.length != 0) {
            secondNum = parseInt(num2.charAt(num2.length - 1));
            num2 = num2.substring(0, num2.length - 1);
        }
        var sum = firstNum + secondNum;
        if (lastSum > 9) {
            sum++;
            arr[arr.length - 1] = sum % 10;
        }
        else {
            arr[arr.length] = sum % 10;
        }
        if (sum > 9) {
            arr[arr.length] = 1;
        }
        lastSum = sum;
    }
    return makeStr(arr);
};

var makeStr = function(arr) {
    var ret = "";
    for (var i = arr.length - 1; i >= 0; i--) {
        ret += arr[i];
    }
    return ret;
}