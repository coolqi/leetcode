// 169. [Majority Element](https://leetcode.com/problems/majority-element/#/description)

// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

var majorityElement = function(nums) {
    let arr = {}; // count arr
    let res = 0;
    for(let i=0;i<nums.length;i++) {
        if(arr[nums[i]]) {
            arr[nums[i]] += 1; // if exists
        } else {
            arr[nums[i]] = 1; // if not exist
        }
    }
    for(let i in arr) {
        if((arr[i] * 2) >= nums.length) {
            if(arr[i] < arr[i+1]) {
                res = i+1;
            } else {
                res = i;
            }
        }
    }
    return parseInt(res);
};