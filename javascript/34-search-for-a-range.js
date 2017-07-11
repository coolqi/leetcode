// * [34. Search for a Range](https://leetcode.com/problems/search-for-a-range/#/description)
// Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// For example,
// Given [5, 7, 7, 8, 8, 10] and target value 8,
// return [3, 4].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums==null) return [-1,-1];
    let start = 0;
    let end = nums.length-1;
    while(start<=end) {
        let mid = (start+end)/2;
        if(nums[mid]<target) {
            start = mid+1;
        } else if (nums[mid]>target) {
            end = mid-1;
        } else {
            if(nums[start]===target&&nums[end]===target) return [start, end]; 
            if(nums[start]<target) start++;
            if(nums[end]>target) end--;
        }
    }    
    return [-1,-1];
};