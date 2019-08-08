
// FINISHED USING STRING


// /**
//  * @param {number} x
//  * @return {boolean}
//  */

// var numDigits = function(x) {
//     var num = Math.log10(x);
//     num = Math.trunc(num) + 1;
//     return num;
// }

// var isPalindrome = function(x) {
//     while (x != 0) {
//         console.log(x);
//         var numDig = numDigits(x);
//         if (numDig == 1) {
//             return true;
//         }
//         var firstDig = x / Math.pow(10, numDig-1);
//         firstDig = Math.trunc(firstDig);
//         var lastDig = x % 10;
//         if (firstDig != lastDig) {
//             return false;
//         }
//         var temp = x;
//         temp -= firstDig * Math.pow(10, numDig - 1);
//         temp = (temp - (x % 10))/10;
//         console.log("temp: " + temp);
//         if (temp == 0) { return true; }
//         if (numDigits(x) - 2 != numDigits(temp)) { return false; }
//         x = temp;
//     }
//     return true;
// };

// // Given a number x, returns the nth digit
// // 10001
// var getNthDigit = function(x, n) {
//     numDig = numDigits(x);
//     if (numDig < n) { return 0; }
//     if (n < 0) { return 0; }

// }

// console.log(isPalindrome(1000110001));

// console.log(Math.log10(0));
// var x = "123456"
// var numDigits = Math.log10(x);
// numDigits = Math.trunc(numDigits) + 1;
// var firstDig = x / Math.pow(10, numDigits-1);
// firstDig = Math.trunc(firstDig);
// var lastDig = x % 10;
// var temp = x;
// temp -= firstDig * Math.pow(10, numDigits - 1);
// temp = (temp - (x % 10))/10;
// console.log(temp);

var usingString = function(x) {
    var str = String(x);
    if (str.length < 2) { return true; }
    while (str.length > 1) {
        console.log(str.charAt(0));
        if (!(str.charAt(0) == str.charAt(str.length - 1))) {
            return false;
        }
        str = str.substring(1, str.length - 1);
    }
    return true;
}

console.log(usingString(10));