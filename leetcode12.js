
// FINISHED, BUT SOLUTION IS REALLY LAME

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var retVal = "";
    while (num != 0) {
        if (num >= 1000) {
            num -= 1000;
            retVal += "M";
        }
        else if (num >= 500) {
            if (num >= 900) {
                retVal += "CM";
                num -= 900;
            }
            else {
                retVal += "D";
                num -= 500;
            }
        }
        else if (num >= 100) {
            if (num >= 400) {
                retVal += "CD"
                num -= 400;
            }
            else {
                retVal += "C";
                num -= 100;
            }
        }
        else if (num >= 50) {
            if (num >= 90) {
                retVal += "XC";
                num -= 90;
            }
            else {
                retVal += "L";
                num -= 50;
            }
        }
        else if (num >= 10) {
            if (num >= 40) {
                retVal += "XL";
                num -= 40;
            }
            else {
                retVal += "X";
                num -= 10;
            }
        }
        else if (num >= 5) {
            if (num >= 9) {
                retVal += "IX";
                num -= 9;
            }
            else {
                retVal += "V";
                num -= 5;
            }
        }
        else {
            if (num == 4) {
                retVal += "IV";
                num -= 4;
            }
            else {
                retVal += "I";
                num--;
            }
        }
    }
    return retVal;
};

var convert = function(s) {
    if (s == 1) { return "I"; }
    if (s == 5) { return "V"; }
    if (s == 10) { return "X"; }
    if (s == 50) { return "L"; }
    if (s == 100) { return "C"; }
    if (s == 500) { return "D"; }
    if (s == 1000) { return "M"; }
    return 0;
}

console.log(intToRoman(58));