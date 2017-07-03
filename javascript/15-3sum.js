// * [15. 3Sum](https://leetcode.com/problems/3sum/#/description)

// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note: The solution set must not contain duplicate triplets.

// For example, given array S = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let arr = [];
    
    nums.sort(function(a,b) 
    { 
        return a - b 
    });
    for(let i=0; i+1<nums.length;i++) {
        if(i>0 && nums[i] == nums[i-1]) continue;
        let j = i+1, k = nums.length -1;
        let target = -nums[i];
        while(j < k) {
            if(nums[j] + nums[k] === target) {
                arr[arr.length] = [nums[i], nums[j], nums[k]];
                j++;
                k--;
                while(j<k && nums[j] === nums[j-1]) j++; //skip same result
                while(j<k && nums[k] === nums[k+1]) k--;
            } else if (nums[j] + nums[k] > target) {
                k--;
            } else j++;
        }
    }
    return arr;   
};