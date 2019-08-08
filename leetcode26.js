
// FINISHED

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // if (nums == null) { return 0; } // 0,0,0,0,1,1,1,2,3,4,4,4 -> length = 12, index 0-3 = 0  4-6 = 1  7 = 2  8 = 3  9-11 = 4
    if (nums.length < 2) { return nums.length; } // if length is 0 or 1, return 0 or 1 respectively
    var i = 0, count = 0, len = nums.length;
    while (count < len - 1) { 
        if (nums[i] != nums[i+1]) { count++; }
        while (nums[i] == nums[i+1] && count < len - 1) {
            nums.splice(i,1);
            count++;
        }
        i++;
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

var nums = [1,2];
// printArray(nums);
var ans = removeDuplicates(nums);

console.log(ans);