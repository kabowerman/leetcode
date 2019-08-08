
// FINISHED (Surprisingly, this one is really hard)

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums == null || nums.length < 2) { return; }
    var idx = indexToSwap(nums);
    if (idx == -1) {
        nums.sort(function(a, b){return a - b});
        return;
    }
    function swap(a, b) {
        var temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
    var temp = nextBiggest(nums, idx);
    swap(idx, temp);
    var newArr = [];
    idx++;
    for (var i = idx; i < nums.length; i++) {
        newArr[newArr.length] = nums[i];
    }
    newArr.sort(function(a, b){return a - b});
    for (var i = idx; i < nums.length; i++) {
        nums[i] = newArr[i-idx];
    }
};

var indexToSwap = function(nums) {
    for (var i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i-1]) {
            return i - 1;
        }
    }
    return -1;
}

// returns the index of the number that is just bigger than the number at index i
// for example, if nums = [5,6,3,9,7] and i = 2, this returns 4, since the next bigger than 3 (index 2) is 7 at index 4
var nextBiggest = function(nums, i) {
    var ret = nums[i];
    var max = Number.MAX_VALUE;
    for (var j = i; j < nums.length; j++) {
        if (nums[j] > nums[i]) {
            if (nums[j] - nums[i] < max - nums[i]) {
                max = nums[j]
                ret = j;
            }
        }
    }
    if (max == nums[i]) { return -1; }
    return ret;
}

// Given an array, prints the array
var printArray = function(arr) {
    var p = "";
    for (var i = 0; i < arr.length - 1; i++) {
        p += arr[i] + ", ";
    }
    p += arr[arr.length - 1];
    console.log(p);
}


var nums = [16,27,25,23,25,16,12,9,1,2,7,20,19,23,16,0,6,22,16,11,8,27,9,2,20,2,13,7,25,29,12,12,18,29,27,13,16,1,22,9,3,21,29,14,7,8,14,5,0,23,16,1,20];
nextPermutation(nums)
printArray(nums);