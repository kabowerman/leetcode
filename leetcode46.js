/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length < 2) { return nums; }
    var ans = [];
    ans[0] = nums[0];
    for (var i = 0; i < nums.length; i++) {
        var length = ans.length;
        for (var j = 0; j < length; j++) {

        }
    }
};


var iter = function(nums) {
    var ret = [];
    ret[0] = nums;
    for (var i = 0; i < nums.length; i++) {

    }
}

// 1,2,3
// 1,3,2
// 2,1,3
// 2,3,1
// 3,1,2
// 3,2,1
