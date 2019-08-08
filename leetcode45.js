
// FINISHED, VERY FAST

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length < 2) { return 0; }
    var jumps = 0, pos = 0;
    while (pos < nums.length) {
        jumps++;
        var curr = nums[pos], max = -1, nextPos = 0;
        if (pos + curr >= nums.length - 1) { return jumps; }
        for (var i = 1; i < curr + 1; i++) {
            if (nums[i + pos] + i > max) {
                max = nums[i + pos] + i;
                nextPos = i + pos;
            }
        }
        pos = nextPos;
    }
    return jumps;
};


var test = [2,3,1,1,4];

var ans = jump(test);

console.log(ans);