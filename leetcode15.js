
// FINISHED

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a, b){return a - b});
    ret = [];
    if (nums == null) { return []; }
    if (nums.length < 3) { return []; }
    var i = 0;
    while(i < nums.length) {

        var lo = i + 1;
        var hi = nums.length - 1;

        while (lo < hi) {
            var sum = nums[i] + nums[lo] + nums[hi];
            if (sum == 0) {
                var newArr = order(nums[i], nums[lo], nums[hi]);
                ret[ret.length] = newArr;
            }
            if (sum <= 0) {
                lo++;
                while( lo < hi && nums[lo] == nums[lo-1]) { lo++; } // to avoid duplicates
            }
            else { // sum > 0
                hi--;
                while (lo < hi && nums[hi] == nums[hi+1]) { hi--; } // to avoid duplicates
            }
        }
        i++;
        while (i < nums.length && nums[i] == nums[i-1]) { i++; }
    }
    return ret;
}

// Given 3 nums a b c, returns an array of them ordered smallest to biggest
var order = function (a, b, c) {
    // 1. ABC   a > b, a > c, b > c
    // 2. ACB   a > b, a > c, b < c
    // 3. BAC   b > a, b > c, a > c
    // 4. BCA   b > a, b > c, a < c
    // 5. CAB   c > a, c > b, a > b
    // 6. CBA   c > a, c > b, a < b
    if (a > b && a > c) {
        if (b > c) {
            return [c, b, a];
        }
        return [b, c, a];
    }
    if (b > a && b > c) {
        if (a > c) {
            return [c, a, b];
        }
        return [a, c, b];
    }
    if (c > a && c > b) {
        if (a > b) {
            return [b, a ,c];
        }
        return [a, b, c];
    }
    if (a == b) { 
        if (a > c) {
            return [c, a, b];
        }
        return [a, b, c];
    }
    if (a == c) { 
        if (a > b) {
            return [b, a, c];
        }
        return [a, c, b];
    }
    if (b == c) {
        if (b > a) {
            return [a, b, c];
        }
        return [b, c, a];
    }
    return [a, b, c];
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

// Given a 2d array, prints all arrays in order
var parseArrays = function (arrs) {
    for (var i = 0; i < arrs.length; i++) {
        printArray(arrs[i]);
    }
}
// var nums = new Array();
// nums[0] = [1,2];
// nums[1] = [3,4];
// nums[2] = [5,6];
// newArr = [4,5];
// console.log("here");
// console.log(alreadyIn(nums, newArr));
// parseArrays(nums);
// var arr = new Array();
// arr[arr.length] = [1, 2];
// var newArr = [1, 2];
var nums = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
// var dog = [];
// console.log(bruteForce(dog));
var ans = durr(nums);
parseArrays(ans);


