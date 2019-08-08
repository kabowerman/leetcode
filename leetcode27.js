
// FINISHED

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i = 0;
    while (i < nums.length) {
        if (nums[i] == val) { nums.splice(i,1); }
        else { i++; }
    }
    return nums.length;
};

// Given an array, prints the array
var printArray = function(arr) {
    var p = "";
    for (var i = 0; i < arr.length - 1; i++) {
        p += arr[i] + ", ";
    }
    p += arr[arr.length - 1];
    console.log(p);
}

var nums = [3,2,2,3];
var val = 3;

var ans = removeElement(nums, val);
console.log(ans);