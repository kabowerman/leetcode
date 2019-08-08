/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 2) { return 1; }
    var prev = 1; // 1 way to climb 0 steps
    var curr = 1; // 1 way to climb 1 step
    var next = 0; // don't know next yet

    for (var i = 1; i < n; i++) {
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
};

var recursiveSolution = function(n) {
    if (n < 3) {
        if (n == 2) { return 2; }
        return 1;
    }
    return rec(n-1) + rec(n-2);
}
