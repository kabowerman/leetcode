
// Finished, really fast

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(arr) {
    var max = arr[0];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        max = Math.max(sum, max);
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
};

var arr = [-2,1,-3,4,-1,2,1,-5,4];
var ans = maxSubArray(arr);

console.log(ans);
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
