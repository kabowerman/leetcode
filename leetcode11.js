
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    var i = 0;
    var j = height.length - 1;

    while (j > i) {
        var curr = Math.min(height[i], height[j]) * (j-i);
        max = Math.max(curr, max);
        if (height[i] > height[j]) {
            j--;
        }
        else {
            i++;
        }
    }
    return max;
};

var test = [1,8,6,2,5,4,8,3,7];

var ans = maxArea(test);

console.log(ans);