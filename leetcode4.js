/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1 == null || nums1.length == 0) { return getMedian(nums2); } // Edge case
    if (nums2 == null || nums2.length == 0) { return getMedian(nums1); } // Edge case
    var len1 = nums1.length;
    var len2 = nums2.length;
    var lenTotal = len1 + len2;
    if (lenTotal % 2 == 1) { // Odd number of total numbers, so only need to return the Math.trunc(lentotal / 2)
        var targetSpot = Math.trunc(lenTotal / 2);
        var idx1 = Math.trunc(len1 / 2);
        var idx2 = Math.trunc(len2 / 2);
    }
    else {

    }
};

// Easy solve, doesn't do what they want tho
var easySolve = function(nums1, nums2) {
    var newArr = [...nums1];
    for (var i = 0; i < nums2.length; i++) {
        newArr[newArr.length] = nums2[i];
    }
    newArr.sort(function(a, b){ return a-b; });
    return getMedian(newArr);
}

// Given a sorted array, returns the median
var getMedian = function(arr) {
    if (arr.length % 2 == 1) {
        return arr[Math.trunc(arr.length / 2)];
    }
    var sum = arr[(arr.length / 2) - 1] + arr[arr.length / 2];
    return sum / 2;
}

// // Should be 6.5
// var nums1 = [3,4,5,5,5,10,11,12,12]; // len1 = 9
// var nums2 = [1,2,6,7,8,8,9]; // len2 = 7

// // Should be 6
// var nums1 = [3,4,5,5,5,10,11,12]; // len1 = 8
// var nums2 = [1,2,6,7,8,8,9]; // len2 = 7

// // Should be 8.5
// var nums1 = [10,10,10,11,12]; // len1 = 5
// var nums2 = [1,2,6,7,8,8,9]; // len2 = 7

var ans = findMedianSortedArrays(nums1, nums2);
console.log(ans);