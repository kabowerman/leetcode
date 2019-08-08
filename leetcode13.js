
// FINISHED

var romanToInt = function(s) {
    var sum = 0;
    while (s.length != 0) {
        if (s.length == 1) { // If only one letter
            sum += convert(s);
            return sum;
        }
        var curr = convert(s.charAt(0));
        var next = convert(s.charAt(1));
        if (curr == next) { // If next letter is the same
            if (s.length == 2) { sum += curr*2; return sum; }
            if (s.charAt(0) == s.charAt(2)) {
                sum += curr*3;
                s = s.substring(3);
            }
            else {
                sum += curr*2;
                s = s.substring(2);
            }
        }
        else if (curr > next) {
            sum += curr;
            s = s.substring(1);
        }
        else {
            sum = sum - curr + next;
            s = s.substring(2);
        }
    }
    return sum;
};

var convert = function(s) {
    if (s == "I") { return 1; }
    if (s == "V") { return 5; }
    if (s == "X") { return 10; }
    if (s == "L") { return 50; }
    if (s == "C") { return 100; }
    if (s == "D") { return 500; }
    if (s == "M") { return 1000; }
    return 0;
}

var m = "DCXXI";
console.log(romanToInt(m));