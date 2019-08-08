/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var map = new Map();
    nums.sort(function(a, b){return a - b});
    for (var i = 0; i < nums.length; i++) {
        map.set(i, nums[i]);
    }
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

// var x = [1,0,-1,0,-2,2];
// var target = 0;

// var ans = dummy(x, target);
// printArray(ans)

var name = "Artificial Intelligence";
if (name.toLowerCase().includes("artificial intelligence")) {
    console.log("NLP is ...");
}
