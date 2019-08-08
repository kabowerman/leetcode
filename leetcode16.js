 
// FINISHED

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a, b){return a - b});
    if (nums == null) { return null; }
    if (nums.length < 3) { return null; }
    var i = 0;
    var closest = Number.MAX_SAFE_INTEGER;
    var ret = Number.MAX_SAFE_INTEGER;
    while (i < nums.length) {
        var lo = i+1;
        var hi = nums.length - 1;
        while (hi > lo) {
            var sum = nums[i] + nums[lo] + nums[hi];
            if (sum == target) {
                return target;
            }
            if (Math.abs(sum - target) < closest) {
                closest = Math.abs(sum - target);
                ret = sum;
            }
            if (sum > target) {
                hi--;
            }
            else {
                lo++;
            }
        }
        i++;
    }
    return ret;
};

var nums = [-1, 2, 1, -4];
var target = 1;

console.log(threeSumClosest(nums, target));