
// FINISHED, NOT AMAZING

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
//     if (nums.length < 2) { return true; }
//     var reachable = canReach(nums);
//     var finishable = canFinish(nums);
//     for (var i = 0; i < nums.length; i++) {
//         if (reachable[i] && finishable[i]) { return true; }
//     }
//     return false;
// };

// // returns an array of whether or not a spot can finish
// var canFinish = function(nums) {
//     var ret = [];
//     for (var i = 0; i < nums.length; i++) {
//         ret[i] = false;
//     }
//     for (var i = nums.length - 1; i > -1; i--) {
//         if (nums[i] + i >= nums.length - 1 || ret[nums[i] + i]) {
//             ret[i] = true;
//         }
//     }
//     return ret;
// }

// // returns an array of whether or not a spot can be reached
// var canReach = function(nums) {
//     var ret = [];
//     ret[0] = true;
//     for (var i = 0; i < nums.length; i++) {
//         if (ret[i]) {
//             for (var j = i + 1; j < nums[i] + i + 1 && j < nums.length; j++) {
//                 ret[j] = true;
//             }
//         }
//     }
//     return ret;
// }

var canJump = function(nums) {
    if (nums.length < 2) { return true; }
    var ret = [];
    for (var i = 0; i < nums.length; i++) { ret[i] = false; }
    for (var i = nums.length - 1; i > -1; i--) {
        if (nums[i] + i >= nums.length - 1 || ret[nums[i] + i]) {
            for (var j = i; j < nums[i] + i && j < nums.length; j++) {
                ret[j] = true;
            }
        }
    }
    return ret[0];
};


var arr = [2,3,1,1,4]

var ans = canJump(arr);

console.log(ans);